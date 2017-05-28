import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export default class DataService {

  constructor (private http: Http) {}

  getData (): Observable<any> {
    return this.http.get('./src/data/wikipedia-terrorist-events-2015-05.json').map((response => <string[]> response.json()));
  }
}
