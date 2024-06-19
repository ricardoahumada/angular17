import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrdersFromApi():Array<Order> {
    return [];
  }

}
