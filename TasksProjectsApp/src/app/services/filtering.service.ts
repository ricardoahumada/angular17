import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class FilteringService {
    constructor() { }

    public filter = (items: any[], fieldName: string, fvalue: any): any => {
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
