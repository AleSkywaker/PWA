self.addEventListener('install', e=>{
    caches.open('cache-1').then(
        cache =>{
            cache.addAll([
                '/',
                '/index.html',
                '/css/styles.css',
                '/img/main.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                '/js/app.js'
            ])
        }
    )
})
