import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Холодильники' },
            { id: 1, name: 'смартфоны' }
        ]
        this._brands = [
            { id: 1, name: 'Samsung' },
            { id: 1, name: 'Apple' },
        ]
        this._devices = [
            { id: 1, name: '12 pro', price:2500, rating:5, img:`` },
            { id: 1, name: '13 pro', price:2500, rating:5, img:`` },
            { id: 1, name: 'Galaxy fold', price:2500, rating:5, img:`` },
            { id: 1, name: '21 ultra', price:2500, rating:5, img:`` },
           
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}