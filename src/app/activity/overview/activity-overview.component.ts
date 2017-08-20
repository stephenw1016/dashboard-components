import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Activity } from '../shared/activity.model';
import ActivityService from '../activity.service';
import AnalyticsService from '../../analytics/analytics.service';

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
  public data: object;
  public totalActivities: number;
  public totalDeaths: number;
  public totalInjuries: number;

  private activities: Array<Activity>;
  private activitySubscription: Subscription;

  constructor (
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit () {
    this.activitySubscription = this.route.params.subscribe((params: Params) => {
      this.activityService.getActivities(params.year, params.month).subscribe((activities) => {
        this.activities = activities;
        this.totalActivities = activities.length;
        this.totalInjuries = this.sumInjuries(activities);
        this.totalDeaths = this.sumDeaths(activities);
        this.avgInjuries = this.totalInjuries / this.totalActivities;
        this.avgDeaths = this.totalDeaths / this.totalActivities;
        this.data = this.analyticsService.nest(activities, 'type');
      });
    });
  }

  ngOnDestroy () {
    this.activitySubscription.unsubscribe();
  }

  sumInjuries (activities: Array<Activity>): number {
    return activities.reduce((injuryCount, activity) => {
      injuryCount += activity.getInjuries();
      return injuryCount;
    }, 0);
  }

  sumDeaths (activities: Array<Activity>): number {
    return activities.reduce((deathCount, activity) => {
      deathCount += activity.getDeaths();
      return deathCount;
    }, 0);
  }
}
