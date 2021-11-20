class Vehicle{
    #vehicleId;
    #providerId;

    constructor(vehicleId, providerId) {
        this.#vehicleId = vehicleId;
        this.#providerId = providerId;
    }

    get vehicleId() {
        return this.#vehicleId;
    }

    set vehicleId(value) {
        this.#vehicleId = value;
    }

    get providerId() {
        return this.#providerId;
    }

    set providerId(value) {
        this.#providerId = value;
    }

    toJSON(){
        return{
            providerId: this.providerId,
            vehicleId: this.vehicleId
        }
    }
}

module.exports = Vehicle;