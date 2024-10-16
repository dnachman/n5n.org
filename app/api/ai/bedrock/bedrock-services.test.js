import { bedrockText } from "./bedrock-services";

test("Test bedrock api call", () => {
  const result = bedrockText("Tell me a joke", "amazon.titan-text-lite-v1", 128, null);
  console.log(result);
  expect(result).not.toBeNull();
});