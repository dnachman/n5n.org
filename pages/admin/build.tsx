/**
 * utility to force build in development
 */
export default function build() {
  return (
    <div className="text-center">
      <h1>Build</h1>
      <a
        className="hover:underline text-blue-600"
        href="https://webhooks.amplify.us-east-1.amazonaws.com/prod/webhooks?id=9a2b6801-31cd-4b48-8d72-688d90fbfe7a&token=d1rXQnUP4vlUNDQG1pQkAy35Q1TcGLcL1nEHj4LCQ8"
      >
        Build development branch
      </a>
    </div>
  );
}
