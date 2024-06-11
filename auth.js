import NextAuth from "next-auth";

import GitHub from "next-auth/providers/github";

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  basePath: "/auth",
  callbacks: {
    authorized({ request, auth }) {
      console.log("In auth.authorized", auth);
      const { pathname } = request.nextUrl;
      console.log("In auth.authorized", pathname, auth);
      if (pathname === "/middleware-example") return !!auth;
      return true;
    },
    jwt({ token, trigger, session }) {
      console.log("In auth.jwt");
      if (trigger === "update") token.name = session.user.name;
      return token;
    },
  },
};

export const isAuthorized = (session, component) => {
  console.log("In isAuthorized", session, component);

  if (session?.user && session?.user === "david@nachman.org") {
    return true;
  }
  return false;
}

export const { handlers, auth, signIn, signOut } = NextAuth(config);
