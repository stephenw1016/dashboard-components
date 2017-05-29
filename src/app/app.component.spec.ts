import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import DashboardComponentListComponent from "./dashboard-component-list/dashboard-component-list.component";
import {RouterModule, Routes} from "@angular/router";
import CounterComponent from "./counter/counter.component";
import {APP_BASE_HREF} from "@angular/common";
import ActivityDetailComponent from "./activity/detail/activity-detail.component";

const routes: Routes = [
  { path: 'detail/counter', component: ActivityDetailComponent },
  { path: '', redirectTo: 'detail/counter?start=50', pathMatch: 'full' },
];

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes)
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      declarations: [
        AppComponent,
        CounterComponent,
        ActivityDetailComponent,
        DashboardComponentListComponent
      ],
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
