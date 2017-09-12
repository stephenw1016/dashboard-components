import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class CrimeService {
  private baseUrl = 'http://localhost:3000/crime/dc';

  constructor (private http: Http) {}

  /**
   * Get all crimes.
   * @returns {Observable<any[]>}
   */
  getAll (): Observable<any[]> {
    let testUrl = './src/data/dc/dc-crime-2016-test.json';
    return this.http.get(testUrl).map((response: any) => response.json());
  }

  /**
   *
   * @param {string} id
   * @returns {Observable<any[]>}
   */
  getById (id: string): Observable<any[]> {
    let url = `${this.baseUrl}/${id}`;
    return this.http.get(url).map((response: any) => response.json());
  }

}
