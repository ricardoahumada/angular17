import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { ApiService } from 'src/app/api/api.service';
import { Observable, catchError, tap } from 'rxjs';
import { HttpErrorHandler } from 'src/app/api/http-error-handler';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _apiSrv: ApiService) { }

  getOrdersFromApi(): Observable<Order[]> {
    return this._apiSrv.getOrders().pipe(
      tap((data) => {
        console.log('getOrdersFromApi:', data);
      }),
      catchError(HttpErrorHandler.errorHandl)
    );
  }

}
