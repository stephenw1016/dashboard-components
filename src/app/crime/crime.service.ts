import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class CrimeService {

  constructor (private http: Http) {}

  /**
   * Get all crimes.
   */
  getAll (): Observable<any[]> {
    return this.http.get('./src/data/dc/dc-crime-2016-test.json')
      .map((response: any) => response.json());
  }

}
