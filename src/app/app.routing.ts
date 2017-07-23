import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import ActivityComponent from './activity/activity.component';

const routes: Routes = [
  { path: '', component: ActivityComponent },
  // { path: 'activities', loadChildren: './activity/activity.module#ActivityModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export default class AppRoutingModule {}
