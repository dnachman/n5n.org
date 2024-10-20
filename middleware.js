// app/middleware.js
import { NextResponse } from 'next/server';
import { Auth } from 'aws-amplify';

import { getCurrentUser } from 'aws-amplify/auth';

export async function middleware(request) {
  const protectedPaths = ['/admin'];
  const { pathname } = request.nextUrl;

  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));

  if (isProtectedPath) {
    try {
      const { username, userId, signInDetails } = await getCurrentUser();
      // Proceed if the user is authenticated
      return NextResponse.next();
    } catch (error) {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  // Continue if the path is not protected
  return NextResponse.next();
}
