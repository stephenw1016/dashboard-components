import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import DashboardComponentList from "./dashboard-component-list/dashboard-component-list.component";
import CounterDetailComponent from "./detail/counter-detail.component";
import CounterComponent from "./counter/counter.component";


const routes: Routes = [
  { path: 'detail/counter', component: CounterDetailComponent },
  { path: '', redirectTo: 'detail/counter?start=50', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    CounterComponent,
    CounterDetailComponent,
    DashboardComponentList
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
