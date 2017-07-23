import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import ActivityComponent from './activity.component';
import ActivityListComponent from './list/activity-list.component';
import DataVizModule from '../dataviz/dataviz.module';
import { ActivityRoutingModule, routingComponents } from './activity.routing';

@NgModule({
  imports: [
    ActivityRoutingModule,
    CommonModule,
    DataVizModule
  ],
  declarations: [
    ActivityComponent,
    ActivityListComponent,
    routingComponents
  ],
  exports: [
    ActivityComponent
  ]
})
export default class ActivityModule {}
