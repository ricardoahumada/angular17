import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {

  constructor(private _sharedserv: SharedService) {

  }

  ngOnInit(): void {
    console.log('Share service in customers...', this._sharedserv.sayHello('ric'));
  }
}
