export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request): Promise<Response> {
  const { method } = request;

  if (method === "POST") {
    try {
      const body = await request.json();
      return new Response(JSON.stringify({ message: "Success", data: body }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } else {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }
}
