
// Ciclo de vida del SW

self.addEventListener('install', event => {
    //Descargar assets
    //Creamos la cache
    console.log('SW: Instalando SW');

    //El SW se actualiza cuando se cierran todos los tabs que el SW viejo esta controlando
    //en caso de no querer esperar a que cierren todos los tabs usar: 'self.skipWaiting()'
    //No se recomienda debido a que puede interferir con lo que el usuario este realizando
    //en el momento de actualizar

    const instalacion = new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);
    }); 

    //espera hasta que una promesa se ejecuta
    //en este caso simula esperar a que se instalen los assets  antes de continuar
    event.waitUntil(instalacion);
});

//Cuando el SW toma el control de la aplicación

self.addEventListener('activate', event => {

    //Borrar cache viejo
    console.log('SW: activo y listo para controlar la app');

});

//FETCH: Manejo de peticiones HTTP

self.addEventListener('fetch', event => {

    //Aplicar estrategias del cache
    //console.log('SW: ', event.request.url);

    //if ( event.request.url.includes('https://reqres.in')){
    //    const resp = new Response(`{ok: false, mensaje: 'jajaja'}`)
    //    event.respondWith(resp);
    //}
});

//SYNC: Util cuando se pierde y se recupera internet

self.addEventListener('sync', event => {
    console.log('Tenemos conexion');
    console.log(event);
    console.log(event.tag);
});


//PUSH: manejar la push notification

self.addEventListener('push', event => {

    console.log("notifiacion recibida");

});