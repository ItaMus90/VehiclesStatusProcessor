const config = require('config');
const DictionaryVehicleServiceClass = require('./dictionaryVehicleService');
const VehicleTransformServiceClass = require('../globalServices/transform/vehicleTransform');

module.exports = async app => {
    console.log('=======================');
    console.log('----------------------  intizilize services  ----------------------');

    const dictionaryService = new DictionaryVehicleServiceClass(process.env.vehicle_file).dictionary;
    const vehicleTransformService = new VehicleTransformServiceClass();

    app.locals.dictionaryVehicle = dictionaryService;
    app.locals.vehicleTransform = vehicleTransformService;
    console.log('=======================');
}