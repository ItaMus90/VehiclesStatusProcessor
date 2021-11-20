const unitEntity = require('./unitEntity');

class Odometer extends unitEntity{
    constructor(value, unit) {
        super(value, unit);
    }
}

module.exports = Odometer;