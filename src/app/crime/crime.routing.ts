import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import CrimeComponent from './crime.component';
import CrimeOverviewComponent from './overview/crime-overview.component';

const routes: Routes = [
  {
    path: '',
    component: CrimeComponent,
    children: [
      { path: 'overview', component: CrimeOverviewComponent },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export default class CrimeRoutingModule {}
