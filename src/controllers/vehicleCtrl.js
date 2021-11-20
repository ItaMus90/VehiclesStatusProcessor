const VehicleFactoryClass = require('../globalServices/vehicleFactory');
const fs = require('fs');

const VehicleFactory = new VehicleFactoryClass();

module.exports = app => {

    function _getVehicle(req, res){
        const vehicleId = req.params.vehicle_id;
        const providerId = _getProviderName(req.headers.host);

        let vehicle = null;
        let vehicleData = null;
        if (app.locals.dictionaryVehicle[providerId]){
            vehicle = app.locals.dictionaryVehicle[providerId].filter(item => item.toJSON().vehicleId === vehicleId);
            if (vehicle){
                vehicle = vehicle[0];
            }
            const providerVehicleFile = require(`../../config/home_task_${vehicle.vehicleId}_${vehicle.providerId}_api_response.json`);
            vehicleData = _getVehicleData(vehicle.providerId,providerVehicleFile);
        }

        return res.status(200).send(vehicleData.toJSON());
    }

    function _normalize(req, res){
        const data = app.locals.vehicleTransform.transform(app.locals.dictionaryVehicle);
        _createFile('output.json', JSON.stringify(data));
        return res.status(200).send(JSON.stringify(data));
    }

    function _getProviderName(host){
        return host.split('-')[0];
    }

    function _getVehicleData(providerName, vehicleRowData){
        let data = null;
        if (vehicleRowData){
            data = VehicleFactory.getProvider(providerName, vehicleRowData);
        }
        return data;
    }

    function _createFile(fileName, content){
        try{
            fs.writeFile(fileName, content, function (err) {
                if (err) return console.log(err);
            });
        }catch (e) {
            console.log(e);
        }
    }

    return {
       getVehicle: _getVehicle,
        normalize: _normalize
    };
};