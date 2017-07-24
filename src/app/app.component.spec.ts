import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import AppComponent from './app.component';
import ActivityListComponent from './activity/list/activity-list.component';
import ActivityOverviewComponent from './activity/overview/activity-overview.component';
import ChartComponent from "./dataviz/chart/chart.component";
import CounterComponent from './dataviz/counter/counter.component';

const routes: Routes = [
  { path: 'detail/counter', component: ActivityOverviewComponent },
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
        ChartComponent,
        ActivityOverviewComponent,
        ActivityListComponent
      ],
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
