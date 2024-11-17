import { Injectable, NgZone, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

const productToReturn = {
    "id": 11,
    "name": "Manguera",
    "code": "E-011",
    "image": "Hose.png",
    "date": "2024-11-18",
    "price": 9.95,
    "stars": 3
  }

@Injectable({
    providedIn: 'root'
})
export class EventSourceService {
    private eventSource: EventSource = {} as EventSource;

    private url = `https://sse.dev/test?jsonobj=${JSON.stringify(productToReturn)}`;
    private options = {};//{ withCredentials: true };

    constructor(private zone: NgZone) { }

    getEventSource(url: string, options: EventSourceInit): EventSource {
        return new EventSource(url, options);
    }

    getEvents(): Observable<Event> {
        this.eventSource = this.getEventSource(this.url, this.options);

        return new Observable((subscriber: Subscriber<Event>) => {
            this.eventSource.onerror = error => {
                this.zone.run(() => subscriber.error(error));
            }

            this.eventSource.onmessage = event => {
                var dataobj = JSON.parse(event.data);
                console.log('EventSourceService:', dataobj);
                // subscriber.next(dataobj);
                this.zone.run(() => subscriber.next(dataobj));
            }
        });
    }


    close(): void {
        if (this.eventSource) this.eventSource.close();
    }
}