const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const { describe } = require('mocha');

const VehicleTransformServiceClass = require('../src/globalServices/transform/vehicleTransform');
const vehicleTransformService = new VehicleTransformServiceClass();

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Odometer function', function() {
    describe('', function() {
        it('mile to kilometer', function() {
            const result = vehicleTransformService._getOdometer({'value': 'mile', 'unit': 2})
            assert.equal(result.value, 'kilometer');
            assert.equal(result.unit, 3.2);
        });

        it('mile to kilometer', function() {
            const result = vehicleTransformService._getOdometer({'value': 'mile', 'unit': 2})
            assert.equal(result.value, 'kilometer');
            assert.notEqual(result.unit, 3.1);
        });
    });
});
