import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterElements',
})
export class FilterElementsPipe implements PipeTransform {
  transform(items: any[], fieldName: string, fvalue: any): any {
    if (items && fieldName && fvalue) {
      return items.filter((aI: any) => {
        if (aI[fieldName]) {
          return (
            aI[fieldName]
              .toLocaleLowerCase()
              .indexOf(fvalue.toLocaleLowerCase()) >= 0
          );
        } else return false;
      });
    } else return items;
  }
  
}
