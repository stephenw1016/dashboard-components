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
  private totalInjuries: number;
  private totalDeaths: number;
  private avgInjuries: number;
  private avgDeaths: number;

  constructor (
    private numberService: NumberService,
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.params.subscribe((params: Params) => {
      this.activityService.getEvents(params.year, params.month).subscribe((activities) => {
        console.log(activities);
        this.activities = activities;
        this.totalActivities = activities.length;
        this.totalInjuries = this.sumInjuries(activities);
        this.totalDeaths = this.sumDeaths(activities);
        this.avgInjuries = this.totalInjuries / this.totalActivities;
        this.avgDeaths = this.totalDeaths / this.totalActivities;
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
