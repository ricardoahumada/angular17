import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../modules/orders/models/order';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const ORDER_URL = environment.apiUrl + '/orders';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getOrders = (): Observable<Order[]> => {
    return this._http.get<Order[]>(ORDER_URL);
  }

}
