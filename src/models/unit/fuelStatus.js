const unitEntity = require('./unitEntity');

class FuelStatus extends unitEntity{
    constructor(value, unit) {
        super(value, unit);
    }
}

module.exports = FuelStatus;