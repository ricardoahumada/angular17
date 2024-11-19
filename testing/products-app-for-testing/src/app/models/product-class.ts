export class ProductClass {

    constructor(
        private _name: string,
        private _code: string,
        private _image: string,
        private _id?: number,
        private _date?: Date | string,
        private _price?: number,
        private _stars?: number
    ) { }

    set name(name: string) { this._name = name; }
    get name() { return this._name; }

}
