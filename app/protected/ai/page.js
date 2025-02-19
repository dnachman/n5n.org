"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // make http call to api at /api/ai/bedrock
      console.log("About to call bedrock with prompt (page.js): ", prompt);

      const options = {
        method: "POST",
        body: JSON.stringify({
          prompt: prompt,
          model: 'amazon.titan-text-express-v1'
        })
      }

      console.log("Options (page.js): ", options);

      const apiResponse = await fetch("/api/ai/bedrock", options);

      if (apiResponse.status == 200) {
        console.log("Response from bedrock (page.js): ", apiResponse);
        const promptResponse = await apiResponse.json();
        setResponse(promptResponse.response);
      }
      else {
        console.log("Error calling bedrock: ", apiResponse);
        setResponse(apiResponse.statusText);
        return;
      }
    } catch (error) {
      console.log("Error calling bedrock: ", error);
      setResponse(error.message);
    }
  };

  return (
    <div className="grid gap-4">
      <form onSubmit={handleSubmit}>
        <label className="mx-5">Prompt:</label>
        <input
          type="text"
          className=" mx-5"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <div className="row-start-2 flex">
        <div className="col-span-1 font-bold">Response: &nbsp; </div>
        <div className="">{response}</div>
      </div>
    </div>
  );
}
