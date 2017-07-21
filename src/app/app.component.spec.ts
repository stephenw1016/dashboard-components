import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import ActivityOverviewComponent from './activity/overview/activity-overview.component';
import CounterComponent from './dataviz/counter/counter.component';
import ChartComponent from "./dataviz/chart/chart.component";
import ActivityListComponent from './activity/list/activity-list.component';

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
