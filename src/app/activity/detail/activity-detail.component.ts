import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import NumberService from '../../shared/number.service';
import ActivityService from '../activity.service';
import { Activity } from '../shared/activity.model';

@Component({
  selector: 'activity-detail-component',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
  providers: [NumberService, ActivityService]
})
export default class ActivityDetailComponent implements OnInit {
  private activities: Object[];
  private totalActivities: number;
  private totalInjured: number;

  constructor (
    private numberService: NumberService,
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.params.subscribe((params: Params) => {
      this.activityService.getEvents(params.year, params.month).subscribe((activities) => {
        this.totalActivities = activities.length;
        this.activities = activities.map((activity: any) => {
          return new Activity(activity);
        });
        this.totalInjured = this.calcInjuries(activities);
      });

      // this.total = Observable
      //   .interval(5000)
      //   .flatMap(() => Observable.of(this.numberService.getRandomNumber(params.start)));
    });
  }

  // TODO: implement
  calcInjuries (activities: Array<Activity>): number {
    return activities.reduce((injuryCount: any, activity: any) => {
      injuryCount += activity.getInjured();
      return injuryCount;
    }, 0);
  }

}
