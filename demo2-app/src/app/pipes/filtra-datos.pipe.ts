import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filtraDatos'
})
export class FiltraDatosPipe implements PipeTransform {

  transform(users: Array<User>, texto: string,): Array<User> {
    console.log('FiltraDatosPipe:', users);

    return users.filter(aU => aU.nombre?.toLocaleLowerCase().includes(texto));
  }

}
