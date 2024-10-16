import { useSession } from "next-auth/react";
 
export default async function Page() {
  const session = await useSession();
 
  if (session?.user.role === "admin") {
    return <p>You are an admin, welcome!</p>;
  }
 
  return <p>You are not authorized to view this page!</p>;
}

// import { auth, isAuthorized } from '@/auth';
// import UserButton from '@/components/user-button';
// import Link from 'next/link';

// export default async function Page() {
//   const session = await auth();

//   if (isAuthorized(session, 'protected-home')) {
//     return <h1>This page is protected</h1>
//   }
//   else {
//     return <>
//       <h1>You are not logged in</h1>
//       <UserButton />
//     </>
//   }

// }
