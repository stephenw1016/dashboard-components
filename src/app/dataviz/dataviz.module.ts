import { NgModule } from '@angular/core';

import ChartComponent from './chart/chart.component';
import CounterComponent from './counter/counter.component';
import SharedModule from '../shared/shared.module';
import CounterDirective from './counter/counter.directive';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ChartComponent,
    CounterComponent,
    CounterDirective
  ],
  exports: [
    ChartComponent,
    CounterComponent,
    CounterDirective
  ]
})
export default class DataVizModule {}
