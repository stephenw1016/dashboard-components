import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import AppComponent from './app.component';
import AppRoutingModule from './app.routing';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      declarations: [
        AppComponent
      ],
    });
  });

  describe('componentInstance', () => {
    let appComponent: AppComponent;

    beforeEach(() => appComponent = TestBed.createComponent(AppComponent).componentInstance);
    afterEach(() => appComponent = null);

    it ('should create AppComponent', () => {
      expect(appComponent instanceof AppComponent).toBe(true);
    });
  });

  describe('template', () => {
    let element: HTMLElement;

    beforeEach(() => element = TestBed.createComponent(AppComponent).nativeElement);
    afterEach(() => element = null);

    it ('should have routerlink to activities', () => {
      expect(element.querySelector('.root-nav').children[0].getAttribute('routerlink')).toBe('activities');
    });
    it ('should have router-outlet for displaying activated route', () => {
      expect(element.getElementsByTagName('ROUTER-OUTLET')[0]).toBeDefined();
    });
  });
});
