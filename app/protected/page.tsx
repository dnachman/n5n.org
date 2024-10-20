'use client';

import { useAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "@/components/ui/button"

export default function ProtectedPage() {
    const { signOut } = useAuthenticator();

    return (
        <main>
            <div>Protected Area</div>
            <Button onClick={signOut}>Sign out</Button>
        </main>
    );
}
