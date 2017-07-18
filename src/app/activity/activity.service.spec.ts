import { Http, ResponseOptions, Response, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
import { Injector } from "@angular/core";
import { MockBackend, MockConnection } from '@angular/http/testing';
import { async, getTestBed, TestBed } from '@angular/core/testing';

import ActivityService from './activity.service'
import { Activity} from "./shared/activity.model";

describe('ActivityService', () => {
  let injector: Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Http,
        ActivityService,
        MockBackend,
        ConnectionBackend,
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
      ]
    });
    injector = getTestBed();
    this.activityService = injector.get(ActivityService);
    this.backend = injector.get(ConnectionBackend);
    this.backend.connections.subscribe((connection: MockConnection) => this.lastConnection = connection);
  });

  describe('getActivities', () => {
    it('should work', async(() => {
      this.activityService.getActivities('2016', '05').subscribe((activities: Array<Activity>) => {
        expect(activities.length).toBe(1);
      });
      this.lastConnection.mockRespond(new Response(new ResponseOptions({
        body: [{ 'injured': 2 }],
      })));
    }));
  });
});
