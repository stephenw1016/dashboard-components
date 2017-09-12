import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import CrimeService from '../crime.service';
import AnalyticsService from '../../analytics/analytics.service';

@Component({
  selector: 'sw-crime-overview',
  templateUrl: './crime-overview.component.html',
  styleUrls: ['./crime-overview.component.css']
})
export default class CrimeOverviewComponent implements OnInit, OnDestroy {
  public totalCrimes: number;
  public occurenceAggregation: object;
  public shiftAggregation: object;

  private crimeSub: Subscription;

  constructor (
    private crimeService: CrimeService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit () {
    this.crimeSub = this.crimeService.getAll().subscribe((crimes: any) => {
      this.totalCrimes = crimes.length;
      this.occurenceAggregation = this.analyticsService.nest(crimes, 'offense');
      this.shiftAggregation = this.analyticsService.nest(crimes, 'shift');
    });
  }

  ngOnDestroy () {
    this.crimeSub.unsubscribe();
  }
}
