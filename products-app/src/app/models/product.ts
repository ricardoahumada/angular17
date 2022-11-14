export class Product {
  private _name: string = '';
  private _code: string = '';
  private _image: string = '';
  private _date: Date = new Date(0, 0, 0);
  private _price: number = 0;
  private _stars: number = 0;

  constructor(
    name?: string,
    code?: string,
    image?: string,
    date?: Date,
    price?: number,
    stars?: number
  ) {
    if (name) this._name = name;
    if (code) this._code = code;
    if (image) this._image = image;
    if (date) this._date = date;
    if (price) this._price = price;
    if (stars) this._stars = stars;
  }

  public get name() {
    return this._name;
  }
  public get code() {
    return this._code;
  }
  public get image() {
    return this._image;
  }
  public get date() {
    return this._date;
  }
  public get price() {
    return this._price;
  }
  public get stars() {
    return this._stars;
  }

  public set name(name: string) {
    this._name = name;
  }
  public set code(code: string) {
    this._code = code;
  }
  public set image(image: string) {
    this._image = image;
  }
  public set date(date: Date) {
    this._date = date;
  }
  public set price(price: number) {
    this._price = price;
  }
  public set stars(stars: number) {
    this._stars = stars;
  }
}
