import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Нетбуки" },
      { id: 4, name: "Телевизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "HP" },
      { id: 5, name: "Asus" },
      
    ];
    this._devices = [
      { id: 1, name: "12 pro", price: 2500, rating: 5, img: `https://cdn.mos.cms.futurecdn.net/Pyma6LSPSGupqqWVwLYuJg.jpg` },
      { id: 2, name: "13 pro", price: 2500, rating: 5, img: `https://cdn.mos.cms.futurecdn.net/Pyma6LSPSGupqqWVwLYuJg.jpg` },
      { id: 3, name: "Galaxy fold", price: 2500, rating: 5, img: `https://cdn.mos.cms.futurecdn.net/Pyma6LSPSGupqqWVwLYuJg.jpg` },
      { id: 4, name: "21 ultra", price: 2500, rating: 5, img: `https://cdn.mos.cms.futurecdn.net/Pyma6LSPSGupqqWVwLYuJg.jpg` },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedType(type) {
    // this.setPage(1)
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
