import { auth } from "@/auth";

export async function checkAcl(component) {
  const session = await auth();

  if (component) {
    if (session?.user) {
      if (session?.user === "david@nachman.org") {
        // only let me in
        return true;
      }
    }
    return false;
  }
  return true;
}
