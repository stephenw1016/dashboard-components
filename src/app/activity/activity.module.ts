import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import ActivityRoutingModule from './activity.routing';

import ActivityComponent from './activity.component';
import ActivityOverviewComponent from './overview/activity-overview.component';
import ActivityListComponent from './list/activity-list.component';
import AnalyticsModule from '../analytics/analytics.module';

@NgModule({
  imports: [
    ActivityRoutingModule,
    AnalyticsModule,
    CommonModule
  ],
  declarations: [
    ActivityComponent,
    ActivityListComponent,
    ActivityOverviewComponent
  ],
  exports: [
    ActivityComponent
  ]
})
export default class ActivityModule {}
