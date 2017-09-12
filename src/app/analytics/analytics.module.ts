import { NgModule } from '@angular/core';

import PieChartComponent from './chart/pie/pie-chart.component';
import CounterComponent from './counter/counter.component';
import SharedModule from '../shared/shared.module';
import CounterDirective from './counter/counter.directive';
import AnalyticsService from './analytics.service';
import VerticalBarChartComponent from './chart/vertical-bar/vertical-bar-chart.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CounterComponent,
    CounterDirective,
    PieChartComponent,
    VerticalBarChartComponent
  ],
  providers: [
    AnalyticsService
  ],
  exports: [
    CounterComponent,
    CounterDirective,
    PieChartComponent,
    VerticalBarChartComponent
  ]
})
export default class AnalyticsModule {}
