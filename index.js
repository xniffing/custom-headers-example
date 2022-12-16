addEventListener('fetch', event => { event.respondWith(process(event.request)) });

function process(request) {
  let body = {
	text: "Hello chat world"
  }
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
    }
  });
}