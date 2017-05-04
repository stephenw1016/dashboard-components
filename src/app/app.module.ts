import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import CounterComponent from "./counter/counter.component";
import DashboardComponentList from "./dashboard-component-list/dashboard-component-list.component";
import DetailComponent from "./detail/detail.component";


const routes: Routes = [
  { path: 'detail/:name', component: DetailComponent },
  { path: '', redirectTo: '/detail/counter', pathMatch: 'full' },
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
    DashboardComponentList,
    DetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
