import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import DashboardComponentListComponent from './dashboard-component-list/dashboard-component-list.component';
import ActivityDetailComponent from './activity/detail/activity-detail.component';
import CounterComponent from './counter/counter.component';

import '../../src/styles.css';


const routes: Routes = [
  { path: 'activity/:year/:month', component: ActivityDetailComponent },
  { path: '', redirectTo: 'activity/2015/05', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    CounterComponent,
    ActivityDetailComponent,
    DashboardComponentListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
