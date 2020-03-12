self.addEventListener('install', function(event) {
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request).then(function (response) {
        const newHeaders = new Headers(response.headers);
        newHeaders.append('Access-Control-Allow-Origin', '*');
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders
        });
      })
  )
    
});
