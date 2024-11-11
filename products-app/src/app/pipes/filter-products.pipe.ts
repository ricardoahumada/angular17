import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
import { filtrarProductos } from '../util/utils';

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], texto: string): Product[] {
    products.forEach(aP => {
      aP.name = aP.name.toLowerCase()
    });

    /* if (texto) return products.filter(aP => aP.name.toLocaleLowerCase().includes(texto.toLocaleLowerCase()));
    else return products; */

    return filtrarProductos(products, texto);
  }

}
