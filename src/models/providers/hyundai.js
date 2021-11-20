const ProviderResult = require('./providerResult');

class Hyundai extends ProviderResult{
    constructor(odometer, fuelStatus, fuelCapacity) {
        super(odometer, fuelStatus, fuelCapacity);
    }
}

module.exports = Hyundai;