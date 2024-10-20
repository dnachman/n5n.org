"use client";

import type { FormEvent } from "react";
import { signIn } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import outputs from "../../../amplify_outputs.json";

interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignInForm extends HTMLFormElement {
  readonly elements: SignInFormElements;
}

Amplify.configure(outputs);

export default function LoginPage() {
  async function handleSubmit(event: FormEvent<SignInForm>) {
    event.preventDefault();
    const form = event.currentTarget;
    // ... validate inputs
    console.log(form.elements.email.value);
    const { nextStep } = await signIn({
      username: form.elements.email.value,
      password: form.elements.password.value,
    });
    console.log(nextStep);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <label htmlFor="email" className="basis-1/3">Email:</label>
        <input type="text" id="email" name="email" className="basis-2/3" />
      </div>
      <br />
      <div className="flex flex-row">
        <label htmlFor="password" className="basis-1/3">Password:</label>
        <input type="password" id="password" name="password" className="basis-2/3" />
      </div>
      <br />
      <input type="submit" className="justify-end" />
    </form>
  );
}
