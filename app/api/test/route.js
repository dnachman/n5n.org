

export async function GET() {
    const data = {
        message: "Hello, API!"
    }
    return Response.json(data);
}