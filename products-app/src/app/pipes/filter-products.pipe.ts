import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(lists_of_elems: IProduct[], text: string): any {
    console.log('FilterProductsPipe:', lists_of_elems, text);
    if (lists_of_elems) {
      return lists_of_elems.filter(
        (aP) =>
          aP.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0
      );
    } else return null;
  }
}
