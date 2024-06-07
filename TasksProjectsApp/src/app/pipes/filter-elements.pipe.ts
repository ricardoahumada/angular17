import { Pipe, PipeTransform } from '@angular/core';
import { FilteringService } from '../services/filtering.service';

@Pipe({
  name: 'filterElements',
})
export class FilterElementsPipe implements PipeTransform {

  constructor(private _filterSrv: FilteringService) {

  }

  transform(items: any[], fieldName: string, fvalue: any): any {
    /* if (items && fieldName && fvalue) {
      return items.filter((aI: any) => {
        if (aI[fieldName]) {
          return (
            aI[fieldName]
              .toLocaleLowerCase()
              .indexOf(fvalue.toLocaleLowerCase()) >= 0
          );
        } else return false;
      });
    } else return items; */
    return this._filterSrv.filter(items, fieldName, fvalue);
  }

}
