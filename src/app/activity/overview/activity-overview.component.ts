import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import * as d3 from 'd3';

import { Subscription } from 'rxjs/Subscription';

import { Activity } from '../shared/activity.model';
import ActivityService from '../activity.service';

@Component({
  selector: 'sw-activity-overview',
  templateUrl: './activity-overview.component.html',
  styleUrls: ['./activity-overview.component.css'],
  providers: [ActivityService],
  encapsulation: ViewEncapsulation.Native
})
export default class ActivityOverviewComponent implements OnInit, OnDestroy {

  public avgDeaths: number;
  public avgInjuries: number;
  public data: Object;
  public totalActivities: number;
  public totalDeaths: number;
  public totalInjuries: number;

  private activities: Array<Activity>;
  private activitySubscription: Subscription;

  constructor (
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.activitySubscription = this.route.params.subscribe((params: Params) => {
      this.activityService.getActivities(params.year, params.month).subscribe((activities) => {
        console.log(activities);
        this.activities = activities;
        this.totalActivities = activities.length;
        this.totalInjuries = this.sumInjuries(activities);
        this.totalDeaths = this.sumDeaths(activities);
        this.avgInjuries = this.totalInjuries / this.totalActivities;
        this.avgDeaths = this.totalDeaths / this.totalActivities;
        this.data = d3.nest().key((d: Activity) => d.getType().toString().toLowerCase()).entries(activities);
      });
    });
  }

  ngOnDestroy () {
    this.activitySubscription.unsubscribe();
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
