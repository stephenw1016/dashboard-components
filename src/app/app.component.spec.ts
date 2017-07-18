import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import ActivityDetailComponent from './activity/detail/activity-detail.component';
import CounterComponent from './counter/counter.component';
import ChartComponent from "./chart/chart.component";
import ActivityListComponent from './activity/list/activity-list.component';

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
        ChartComponent,
        ActivityDetailComponent,
        ActivityListComponent
      ],
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
