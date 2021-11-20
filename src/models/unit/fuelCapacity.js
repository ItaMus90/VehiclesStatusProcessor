const unitEntity = require('./unitEntity');

class FuelCapacity extends unitEntity{
    constructor(value, unit) {
        super(value, unit);
    }
}

module.exports = FuelCapacity;