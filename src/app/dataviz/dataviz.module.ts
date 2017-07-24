import { NgModule } from '@angular/core';

import ChartComponent from './chart/chart.component';
import CounterComponent from './counter/counter.component';
import SharedModule from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ChartComponent,
    CounterComponent
  ],
  exports: [
    ChartComponent,
    CounterComponent
  ]
})
export default class DataVizModule {}
