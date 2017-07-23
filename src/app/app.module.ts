import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import ActivityModule from './activity/activity.module';
import AppRoutingModule from './app.routing';

import '../../src/styles.css';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    ActivityModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
