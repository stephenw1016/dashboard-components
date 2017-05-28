import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import NumberService from "../shared/number.service";
import EventService from "../shared/event.service";

@Component({
  selector: 'counter-detail-component',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css'],
  providers: [NumberService, EventService]
})
export default class CounterDetailComponent implements OnInit {
  private total: number;
  private events: Object[];

  constructor (
    private numberService: NumberService,
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.params.subscribe((params: Params) => {
      this.eventService.getEvents(params.year, params.month).subscribe((events) => {
        this.events = events;
        this.total = events.length;
      });

      // this.total = Observable
      //   .interval(5000)
      //   .flatMap(() => Observable.of(this.numberService.getRandomNumber(params.start)));
    });
  }
}
