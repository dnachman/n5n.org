"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import "./styles.css";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  return <div className="grid gap-4">Admin area coming soon...</div>;
}
