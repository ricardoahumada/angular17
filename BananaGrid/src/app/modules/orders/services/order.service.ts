import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { ApiService } from 'src/app/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _apiSrv: ApiService) { }

  getOrdersFromApi(): Observable<Order[]> {
    return this._apiSrv.getOrders();
  }

}
