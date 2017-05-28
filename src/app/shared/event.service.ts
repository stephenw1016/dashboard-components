import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class EventService {


  constructor (private http: Http) {}

  getEvents (year: string, month: string): Observable<any> {
    let url: string = `./src/data/wikipedia-terrorist-events-${year}-${month}.json`;

    return this.http.get(url).map((response => <string[]> response.json()));
  }
}
