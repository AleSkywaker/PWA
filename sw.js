
self.addEventListener('fetch', event =>{

  if(event.request.url.includes('style')){
    event.respondWith( null)

  }

  // event.respondWith( fetch( event.request))
  // console.log(event);
})

