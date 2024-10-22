'use client';

import { useAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function ProtectedPage() {
    const { signOut } = useAuthenticator();

    return (
        <main>
            <h1>Protected Area</h1>
            <br />
            <Link href="/protected/ai">AI Stuff</Link>
            <br />
            <br />
            <Button onClick={signOut}>Sign out</Button>
        </main>
    );
}
