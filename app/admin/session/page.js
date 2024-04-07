import { auth } from "@/auth";
import { SignOut } from "@/components/auth-components";
import SessionData from "@/components/session-data";

export default async function Page() {
  const session = await auth();
  console.log("Session info: ", session);
  return (
    <div className="grid gap-4">
      <SessionData session={session} />
      {session?.user && <SignOut />}
    </div>
  );
}
