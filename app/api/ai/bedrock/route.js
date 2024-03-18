"use strict";

import { bedrockText } from "./bedrock-services";

export async function POST(request) {
  const body = await request.json();
  console.log("Request body: ", body);

  const prompt = body?.prompt || "Tell me a joke.";
  const model = body?.model || "amazon.titan-text-express-v1";
  const maxTokens = body?.maxTokens || null;
  const modelOptions = body?.modelOptions || null;


  console.log(
    "Calling bedrock-text: ",
    prompt,
    model,
    maxTokens,
    modelOptions
  );

  try {
    const resp = await bedrockText(prompt, model);

    console.log("Response from bedrock (route.js): ", resp);

    return Response.json(resp);

  } catch (error) {
    console.log("Error calling bedrock: ", error);
    return new Response(`Error calling bedrock: ${error.message}`, {
      status: 500,
    })
  }
}

