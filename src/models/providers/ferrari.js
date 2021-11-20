const ProviderResult = require('./providerResult');

class Ferrari extends ProviderResult{
    constructor(odometer, fuelStatus, fuelCapacity) {
        super(odometer, fuelStatus, fuelCapacity);
    }
}

module.exports = Ferrari;