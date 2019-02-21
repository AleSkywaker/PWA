self.addEventListener("fetch", event => {
  if (event.request.url.includes(".jpg")) {
    let newImg = fetch('./img/main-patas-arriba.jpg')
    
    event.respondWith(newImg);
  }
});
