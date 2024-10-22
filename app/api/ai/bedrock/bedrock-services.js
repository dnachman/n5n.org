
import { Bedrock } from "@langchain/community/llms/bedrock";

export async function bedrockText(query, model, maxTokens, modelOptions) {
  // If no credentials are provided, the default credentials from
  // @aws-sdk/credential-provider-node will be used.
  const bedrockModel = new Bedrock({
    model: model || "amazon.titan-text-express-v1", // You can also do e.g. "anthropic.claude-v2", "meta.llama2-13b-v1"
    region: "us-east-1",
    streaming: false,
    // endpointUrl: "custom.amazonaws.com",
    credentials: {
      accessKeyId: process.env.N5N_WEB_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.N5N_WEB_AWS_SECRET_ACCESS_KEY,
    },
    // modelKwargs: {},
    modelKwargs: modelOptions || {},
    maxTokens: maxTokens || 256,
  });

  // const stream = await bedrockModel.stream(query);
  // const chunks = [];
  // for await (const chunk of stream) {
  //   chunks.push(chunk);
  //   console.log(`${chunk}|`);
  // }
  // return chunks.join();

  const resp = await bedrockModel.invoke(query);
  console.log("Bedrock response: ", resp);
  return {
    "response": resp
  };
};

