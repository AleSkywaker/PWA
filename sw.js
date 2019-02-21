self.addEventListener("fetch", event => {
  if (event.request.url.includes("style")) {
    event.respondWith(null);
  } else {
    event.respondWith(fetch(event.request));
  }
 // console.log(event);
});
