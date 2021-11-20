const ProviderResult = require('./providerResult');

class AstonMartin extends ProviderResult{
    constructor(odometer, fuelStatus, fuelCapacity) {
        super(odometer, fuelStatus, fuelCapacity);
    }
}

module.exports = AstonMartin;