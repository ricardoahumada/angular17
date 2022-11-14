import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(value: any[], text: string): any[] {
    console.log('filtering:', value, text);
    if(text){
      return value.filter(aP=>aP.name.toLocaleLowerCase().indexOf(text.toLocaleLowerCase())>=0);      
    }else return value;
  }

}
