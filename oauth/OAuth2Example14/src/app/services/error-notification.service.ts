import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorNotificationService {
  constructor() {}
  private sub = new BehaviorSubject<string>('');

  notify(message: any) {
    this.sub.next(message);
  }

  returnAsObservable() {
    return this.sub.asObservable();
  }
}
