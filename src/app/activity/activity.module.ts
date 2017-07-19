import { NgModule } from '@angular/core';
import ActivityComponent from './activity.component';
import ActivityDetailComponent from './detail/activity-detail.component';
import ActivityListComponent from './list/activity-list.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import DataVizModule from '../dataviz/dataviz.module';

const routes: Routes = [
  { path: 'activities/year/:year', component: ActivityDetailComponent },
  { path: 'activities/:year/:month', component: ActivityDetailComponent },
  { path: '', redirectTo: 'activities/year/2015', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    DataVizModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ActivityComponent,
    ActivityDetailComponent,
    ActivityListComponent
  ],
  exports: [
    ActivityComponent
  ]
})
export default class ActivityModule {}
