import { HttpModule, ResponseOptions, XHRBackend, Response} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import ActivityService from './activity.service'
import { async, getTestBed, TestBed} from '@angular/core/testing';
import { Injector } from "@angular/core";

describe('ActivityService', () => {
  let service: ActivityService;
  let mockBackend: MockBackend;
  let injector: Injector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ActivityService,
        MockBackend,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
    injector = getTestBed();
  });

  beforeEach(() => {
    mockBackend = injector.get(MockBackend);
    service = injector.get(ActivityService);
  });

  fdescribe('getActivities', () => {
    it('should work', async((done: DoneFn) => {
      let mockResponse = [{ "injured": 2 }];
      let responseOptions = new ResponseOptions({ body: JSON.stringify(mockResponse) });

      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(responseOptions));
      });

      service.getActivities('2016', '05').subscribe(activities => {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        expect(activities.length).toBe(2000000);
        done();
      });
    }));
  });

});
