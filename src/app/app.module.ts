import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import ActivityListComponent from './activity/list/activity-list.component';
import ActivityDetailComponent from './activity/detail/activity-detail.component';
import CounterComponent from './counter/counter.component';
import ChartComponent from "./chart/chart.component";

import '../../src/styles.css';


const routes: Routes = [
  { path: 'activities/year/:year', component: ActivityDetailComponent },
  { path: 'activities/:year/:month', component: ActivityDetailComponent },
  { path: '', redirectTo: 'activities/year/2015', pathMatch: 'full' },
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
    ChartComponent,
    CounterComponent,
    ActivityDetailComponent,
    ActivityListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
