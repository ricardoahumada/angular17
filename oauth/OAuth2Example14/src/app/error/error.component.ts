import { Component, NgZone, OnInit } from '@angular/core';
import { ErrorNotificationService } from '../services/error-notification.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor(
    private ErrorServ: ErrorNotificationService,
    private zone: NgZone
  ) {}

  error: string='';

  ngOnInit() {
    this.ErrorServ.returnAsObservable().subscribe((err) => {
      this.zone.run(() => {
        this.error = err;
      });
    });
  }
}
