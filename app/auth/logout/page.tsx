'use client';

import { signOut } from "aws-amplify/auth"

export default function LogoutPage() {
    async function handleSignOut() {
        await signOut()
    }
    return (
        <button type="button" onClick={handleSignOut}>
            Sign out
        </button>
    )

}


