class UnitEntity{
    #value;
    #unit;

    constructor(value, unit) {
        this.#value = value;
        this.#unit = unit;
    }

    get value() {
        return this.#value;
    }

    set value(value) {
        this.#value = value;
    }

    get unit() {
        return this.#unit;
    }

    set unit(value) {
        this.#unit = value;
    }

    toJSON(){
        return {
            value: this.value,
            unit: this.unit
        }
    }
}

module.exports = UnitEntity;