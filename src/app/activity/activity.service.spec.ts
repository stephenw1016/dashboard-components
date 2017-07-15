import { ResponseOptions, Response, ConnectionBackend, RequestOptions, BaseRequestOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { async } from '@angular/core/testing';
import { ReflectiveInjector } from "@angular/core";

import ActivityService from './activity.service'
import { Activity} from "./shared/activity.model";

describe('ActivityService', () => {

  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      ActivityService,
    ]);
    this.activityService = this.injector.get(ActivityService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
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

// TODO: Figure out the difference between the above and below setup approaches. When is either most appropriate?

// import { Http, ResponseOptions, Response, ConnectionBackend, RequestOptions, BaseRequestOptions } from '@angular/http';
// import { Injector } from "@angular/core";
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { async, getTestBed, TestBed } from '@angular/core/testing';
//
// import ActivityService from './activity.service'
// import { Activity} from "./shared/activity.model";
//
// describe('ActivityService', () => {
//   let injector: Injector;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         Http,
//         ActivityService,
//         MockBackend,
//         ConnectionBackend,
//         { provide: ConnectionBackend, useClass: MockBackend },
//         { provide: RequestOptions, useClass: BaseRequestOptions },
//       ]
//     });
//     injector = getTestBed();
//     this.activityService = injector.get(ActivityService);
//     this.backend = injector.get(ConnectionBackend);
//     this.backend.connections.subscribe((connection: MockConnection) => this.lastConnection = connection);
//   });
//
//   describe('getActivities', () => {
//     it('should work', async(() => {
//       this.activityService.getActivities('2016', '05').subscribe((activities: Array<Activity>) => {
//         expect(activities.length).toBe(1);
//       });
//       this.lastConnection.mockRespond(new Response(new ResponseOptions({
//         body: [{ 'injured': 2 }],
//       })));
//     }));
//   });
// });
