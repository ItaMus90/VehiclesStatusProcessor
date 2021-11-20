const { app, init } = require('../app');
const globalServices = require('../src/globalServices');
const config = require('config');


( async () => {
    try {
        await globalServices(app);
        await init(app);

        const http = require('http');
        const port = process.env.EP_PORT || config.port;
        app.set('port', port);
        const server = http.createServer(app);
        server.listen(port);


        server.on('error', onError);
        server.on('listening', onListening);
    } catch (e) {
        onError(e);
    }
})();

function onError(error) {
    console.log(error);
    process.exit(1);
}

function onListening() {
    console.log(`server listening on port:${app.get('port')}`);
}