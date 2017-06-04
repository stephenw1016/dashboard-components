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
  private activities: Array<Activity>;
  private totalActivities: number;
  private totalInjured: number;
  private totalDeaths: number;

  constructor (
    private numberService: NumberService,
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.params.subscribe((params: Params) => {
      this.activityService.getEvents(params.year, params.month).subscribe((activities) => {
        this.activities = activities;
        this.totalActivities = activities.length;
        this.totalInjured = this.sumInjuries(activities);
        this.totalDeaths = this.sumDeaths(activities);
      });
    });
  }

  sumInjuries (activities: Array<Activity>): number {
    return activities.reduce((injuryCount, activity) => {
      injuryCount += activity.getInjured();
      return injuryCount;
    }, 0);
  }

  sumDeaths (activities: Array<Activity>): number {
    return activities.reduce((deathCount, activity) => {
      deathCount += activity.getDead();
      return deathCount;
    }, 0);
  }
}
