import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import NumberService from "../../shared/number.service";
import ActivityService from "../activity.service";

@Component({
  selector: 'activity-detail-component',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
  providers: [NumberService, ActivityService]
})
export default class ActivityDetailComponent implements OnInit {
  private total: number;
  private activities: Object[];

  constructor (
    private numberService: NumberService,
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.params.subscribe((params: Params) => {
      this.activityService.getEvents(params.year, params.month).subscribe((activities) => {
        this.activities = activities;
        this.total = activities.length;
      });

      // this.total = Observable
      //   .interval(5000)
      //   .flatMap(() => Observable.of(this.numberService.getRandomNumber(params.start)));
    });
  }
}
