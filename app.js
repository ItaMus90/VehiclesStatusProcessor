const express = require('express');
const bodyParser = require('body-parser');

const app = express();

function serverConf(app) {
    app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
    app.use(bodyParser.json({limit: '100mb', extended: true}));
    app.use(bodyParser.json());
}

module.exports.init = async app => {
    serverConf(app);
    require('./src/routes')(app);
}

module.exports.app = app;