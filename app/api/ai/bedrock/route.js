"use strict";

import { bedrockText } from "./bedrock-services";

export async function POST(request) {
  const prompt = request.body?.prompt || "What is the meaning of life?";
  const model = request.body?.model || "amazon.titan-text-express-v1";
  const maxTokens = request.body?.maxTokens || null;
  const modelOptions = request.body?.modelOptions || null;

  console.log(
    "Calling bedrock-text: ",
    prompt,
    model,
    maxTokens,
    modelOptions
  );

  try {
    const resp = await bedrockText(prompt, model);

    return Response.json(resp);

  } catch (error) {
    console.log("Error calling bedrock: ", error);
    return new Response(`Error calling bedrock: ${error.message}`, {
      status: 500,
    })
  }
}

