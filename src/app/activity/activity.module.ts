import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import ActivityRoutingModule from './activity.routing';
import DataVizModule from '../dataviz/dataviz.module';

import ActivityComponent from './activity.component';
import ActivityOverviewComponent from './overview/activity-overview.component';
import ActivityListComponent from './list/activity-list.component';

@NgModule({
  imports: [
    ActivityRoutingModule,
    CommonModule,
    DataVizModule
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
