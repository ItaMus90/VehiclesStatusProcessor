class ProviderResult{
    #odometer;
    #fuelStatus;
    #fuelCapacity

    constructor(odometer, fuelStatus, fuelCapacity) {
        this.#odometer = odometer;
        this.#fuelStatus = fuelStatus;
        this.#fuelCapacity = fuelCapacity;
    }


    get odometer() {
        return this.#odometer;
    }

    set odometer(value) {
        this.#odometer = value;
    }

    get fuelStatus() {
        return this.#fuelStatus;
    }

    set fuelStatus(value) {
        this.#fuelStatus = value;
    }

    get fuelCapacity() {
        return this.#fuelCapacity;
    }

    set fuelCapacity(value) {
        this.#fuelCapacity = value;
    }

    toJSON(){
        return{
            fuelCapacity: this.fuelCapacity.toJSON(),
            fuelStatus: this.fuelStatus.toJSON(),
            odometer: this.odometer.toJSON()
        }
    }
}

module.exports = ProviderResult;