const ProviderResult = require('./providerResult');

class Mazda extends ProviderResult{
    constructor(odometer, fuelStatus, fuelCapacity) {
        super(odometer, fuelStatus, fuelCapacity);
    }
}

module.exports = Mazda;