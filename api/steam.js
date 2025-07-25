
export default async (req) => {
  const url = new URL(req.url);
  const target = 'https://store.steampowered.com' + url.pathname.replace('/api/steam', '') + url.search;
  const res = await fetch(target, { method: req.method, headers: req.headers });
  return new Response(res.body, {
    status: res.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};