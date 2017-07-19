import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import ChartComponent from './chart/chart.component';
import CounterComponent from './counter/counter.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
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
