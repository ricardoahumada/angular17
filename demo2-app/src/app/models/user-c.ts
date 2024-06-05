export class UserC {

    constructor(private _id: number,
        private _nombre: string | null,
        private _rating: number) {
    }

    get id() {
        return this._id;
    }
    set id(val: number) {
        this._id = val;
    }

    validaUsuario(): boolean {
        return this._id > 0;
    }
}
