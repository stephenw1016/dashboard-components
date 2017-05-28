import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import DashboardComponentListComponent from "./dashboard-component-list/dashboard-component-list.component";
import CounterDetailComponent from "./detail/counter-detail.component";
import CounterComponent from "./counter/counter.component";
import '../../src/styles.css';
import {HttpModule} from "@angular/http";


const routes: Routes = [
  { path: 'events/:year/:month', component: CounterDetailComponent },
  { path: '', redirectTo: 'events/2015/05', pathMatch: 'full' },
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
    CounterDetailComponent,
    DashboardComponentListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
