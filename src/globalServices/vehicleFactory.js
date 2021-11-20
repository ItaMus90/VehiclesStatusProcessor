const OdometerClass = require('../models/unit/odometer');
const FuelCapacityClass = require('../models/unit/fuelCapacity');
const fuelStatusClass = require('../models/unit/fuelStatus');

let instance = null;

class VehicleFactory{

    constructor() {
        if (!instance){
            instance = this;
        }
        return instance;
    }

    getProvider(providerName, objProp){
        let provider = null;
        try {
            const providerClass = require(`../models/providers/${providerName}`);

            const odometer = new OdometerClass(objProp.odometer.unit, objProp.odometer.value);
            const fuelStatus = new FuelCapacityClass(objProp.fuel_status.unit, objProp.fuel_status.value);
            const fuelCapacity = new fuelStatusClass(objProp.fuel_capacity.unit, objProp.fuel_capacity.value);

            provider = new providerClass(odometer, fuelStatus, fuelCapacity);
        }catch (e) {
            console.log(e);
        }finally {
            return provider;
        }
    }
}

module.exports = VehicleFactory;