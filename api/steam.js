// app/api/steam/route.ts  （Next.js App Router）
export const runtime = 'edge';   // 告诉 Vercel 用 Edge Runtime [^8^]

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const appid = searchParams.get('appid') || '2277560';
  const steamUrl =
    `https://store.steampowered.com/appreviews/${appid}?${searchParams.toString()}`;
  const res = await fetch(steamUrl);
  return new Response(res.body, {
    status: res.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
}
