'use client';
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);

export default function ProtectedLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <Authenticator hideSignUp={true}>
            {children}
        </Authenticator>
    );
}