const ProviderResult = require('./providerResult');

class Lamborghini extends ProviderResult{
    constructor(odometer, fuelStatus, fuelCapacity) {
        super(odometer, fuelStatus, fuelCapacity);
    }
}

module.exports = Lamborghini;