// if('serviceWorker' in navigator){
//     console.log('Podemos usuarlo')
// }

if(navigator.serviceWorker){
    console.log('Podemos usuarlo')

    navigator.serviceWorker.register('/sw.js')
}