export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  const total = searchParams.get("total");

  return new Response(
    JSON.stringify({
      message: "This is KakaoPay Checkout",
      total: total,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}