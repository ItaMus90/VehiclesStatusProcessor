const VehicleFactoryClass = require('../vehicleFactory');

const VehicleFactory = new VehicleFactoryClass();

class VehicleTransform{

    transform(dictionaryVehicle){
        let vehicleList = [];
        let vehicleListResult = [];
        Object.keys(dictionaryVehicle).forEach(providerId => {
           dictionaryVehicle[providerId].forEach(vehicleObj => {
               try{
                   const data = require(`../../../config/home_task_${vehicleObj.vehicleId}_${vehicleObj.providerId}_api_response.json`);
                   vehicleList.push(VehicleFactory.getProvider(vehicleObj.providerId, data));
                   const temp = vehicleList.map(vehicle => {
                        return   {
                            'vehicle_id': {
                                'value': vehicleObj.vehicleId,
                                'unit': null
                            },
                            'odometer': this._getOdometer(vehicle.odometer),
                            'fuel_level': this._getFuelLevel(vehicle.fuelStatus, vehicle.fuelCapacity),
                        }
                   });
                   vehicleListResult.push(temp);
                   vehicleList = [];
               }catch (e) {
                   console.log(e);
               }
           });
        });
        return vehicleListResult.flat();
    }

    _getOdometer(odometer){
        switch (odometer.value) {
            case 'mile':
                odometer.unit = parseFloat(odometer.unit) * 1.6;
                odometer.value = 'kilometer';
                break;

        }
        return odometer;
    }

    _getFuelLevel(fuelStatus, fuelCapacity){
        return {
            'value': 'percentage',
            'unit': fuelCapacity.unit === 0 ? 0 : (fuelStatus.unit / fuelCapacity.unit)
        }
    }
}

module.exports = VehicleTransform;
