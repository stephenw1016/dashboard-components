import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import ActivityModule from './activity/activity.module';

import '../../src/styles.css';
import ActivityComponent from './activity/activity.component';

const routes: Routes = [
  { path: '**', component: ActivityComponent },
];

@NgModule({
  imports: [
    ActivityModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
