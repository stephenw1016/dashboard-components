import { NgModule } from '@angular/core';
// import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import AppRoutingModule from './app.routing';

import '../../src/styles.css';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  exports: [
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
