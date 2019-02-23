// if('serviceWorker' in navigator){
//     console.log('Podemos usuarlo')
// }

if(navigator.serviceWorker){
    

    navigator.serviceWorker.register('/sw.js')
}