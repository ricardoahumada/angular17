import { Component, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { EventSourceService } from '../services/EventSourceService';

@Component({
  selector: 'app-sse',
  templateUrl: './sse.component.html',
  styleUrl: './sse.component.scss'
})
export class SSEComponent implements OnInit {

  private $eventSourceSubscription: SubscriptionLike | null = null;
  dataList: any[] = [];
  constructor(private eventSourceService: EventSourceService) {
  }

  ngOnInit(): void {
    this.$eventSourceSubscription = this.eventSourceService.getEvents().subscribe(data => {
        console.log('SSEComponent: ', data);
        this.dataList = [...this.dataList, data];
      });
  }

  ngOnDestroy() {
    if (this.$eventSourceSubscription) this.$eventSourceSubscription.unsubscribe();
    this.eventSourceService.close();
  }
}
