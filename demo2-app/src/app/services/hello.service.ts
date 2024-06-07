import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  private _usuarios: Array<User> = [
    { id: 1, nombre: 'Juan', rating: 0 },
    { id: 2, nombre: 'Ana', rating: 2 },
    { id: 3, nombre: 'Luisa', rating: 0 },
  ];

  public getUsers = (): Array<User> => {
    return this._usuarios;
  }

}
