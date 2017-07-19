import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import ActivityDetailComponent from './detail/activity-detail.component';

const routes: Routes = [
  { path: 'activities/year/:year', component: ActivityDetailComponent },
  { path: 'activities/:year/:month', component: ActivityDetailComponent },
  { path: '', redirectTo: 'activities/year/2015', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}

export const routingComponents = [ActivityDetailComponent];
