const VehicleClass = require('../models/vehicle');

class DictionaryVehicleService{
    #data;
    #dictionary = {};
    constructor(fileName) {
        try{
            this.#data = require(`../../config/${fileName}`);
            this.#createDictionary();
        }catch (e) {
            /*
                handle exception
             */
        }
    }

    #createDictionary = () => {
        this.#data.vehicles.forEach(item => {
            if (!this.#dictionary[item.provider_id]){
                this.#dictionary[item.provider_id] = [];
                this.#dictionary[item.provider_id].push(new VehicleClass(item.vehicle_id,item.provider_id));
            }else if (!this.#hasDuplicateData(this.#dictionary[item.provider_id], item.vehicle_id)){
                this.#dictionary[item.provider_id].push(new VehicleClass(item.vehicle_id,item.provider_id));
            }
        });
    }

    #hasDuplicateData = (dictionary, vehicleId) => {
        const result =  dictionary.filter(item => item.toJSON().vehicleId === vehicleId);
        return result.length > 0;
    }

    get dictionary(){
        return this.#dictionary;
    }

}

module.exports = DictionaryVehicleService;