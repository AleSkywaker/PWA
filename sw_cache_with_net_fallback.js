const CACHE_STATIC_NAME = 'static-v2';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';


function limpiarCache(cacheName, numeroItems){
   caches.open(cacheName)
	.then(cache =>{
		return cache.keys()
			.then(keys=>{
				console.log(keys)

				if(keys.length > numeroItems){
					cache.delete(keys[0])
						.then(limpiarCache(cacheName, numeroItems))
				}
			})
	})
}



self.addEventListener('install', (e) => {
	const cacheProm = caches.open(CACHE_STATIC_NAME).then((cache) => {
		return cache.addAll([ '/', '/index.html', '/css/style.css', '/img/main.jpg', '/js/app.js' ]);
	});

	const cacheInmu = caches.open(CACHE_INMUTABLE_NAME).then((cache) => {
		return cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
	});

	e.waitUntil(Promise.all([cacheProm, cacheInmu]));
});

self.addEventListener('fetch', (e) => {
	//2-Cache with Network Fallback
	const respuesta = caches.match(e.request).then((res) => {
		if (res) return res;

		//No existe el archivo
		//Tengo que ir a la web
		console.log('No existe', e.request.url);
		return fetch(e.request).then((newResp) => {
			caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
				cache.put(e.request, newResp);
				limpiarCache(CACHE_DYNAMIC_NAME, 50)
			});
			return newResp.clone();
		});
	});
	e.respondWith(respuesta);

	// 1-Cache Only
	//e.respondWith(caches.match(e.request))
});
