import { NgModule } from '@angular/core';

import PieChartComponent from './chart/pie/pie-chart.component';
import CounterComponent from './counter/counter.component';
import SharedModule from '../shared/shared.module';
import CounterDirective from './counter/counter.directive';
import AnalyticsService from './analytics.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PieChartComponent,
    CounterComponent,
    CounterDirective
  ],
  providers: [
    AnalyticsService
  ],
  exports: [
    PieChartComponent,
    CounterComponent,
    CounterDirective
  ]
})
export default class AnalyticsModule {}
