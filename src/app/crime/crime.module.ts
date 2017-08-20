import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import CrimeRoutingModule from './crime.routing';

import CrimeComponent from './crime.component';
import CrimeOverviewComponent from './overview/crime-overview.component';
import CrimeService from './crime.service';
import AnalyticsModule from '../analytics/analytics.module';

@NgModule({
  imports: [
    AnalyticsModule,
    CrimeRoutingModule,
    CommonModule
  ],
  declarations: [
    CrimeComponent,
    CrimeOverviewComponent
  ],
  providers: [
    CrimeService
  ],
  exports: [
    CrimeComponent
  ]
})
export default class CrimeModule {}
