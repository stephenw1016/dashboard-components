import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import ActivityOverviewComponent from './overview/activity-overview.component';
import ActivityComponent from './activity.component';

const routes: Routes = [
  {
    path: 'activities',
    component: ActivityComponent,
    children: [
      { path: ':year/:month', component: ActivityOverviewComponent },
      { path: ':year', component: ActivityOverviewComponent },
      { path: '**', redirectTo: '2015/09', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}

export const routingComponents = [ActivityOverviewComponent];
