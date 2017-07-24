import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import AppRoutingModule from './app.routing';
import CoreModule from './core/core.module';
import AppComponent from './app.component';

import '../../src/styles.css';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
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
