module.exports = app => {
    const  serviceVehicle  = require('./vehicle')(app);
    const  serviceNormalize  = require('./normalize')(app);

    app.use('/vehicles', serviceVehicle);
    app.use('/normalize', serviceNormalize);
}