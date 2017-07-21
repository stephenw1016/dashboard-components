import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import ActivityOverviewComponent from './overview/activity-overview.component';

const routes: Routes = [
  { path: 'activities/:year', component: ActivityOverviewComponent },
  { path: 'activities/:year/:month', component: ActivityOverviewComponent },
  { path: '', redirectTo: 'activities/2015', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}

export const routingComponents = [ActivityOverviewComponent];
