import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from './app.component';
import CounterComponent from "./counter/counter.component";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    CounterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
