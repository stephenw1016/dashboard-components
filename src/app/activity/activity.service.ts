import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Activity} from "./shared/activity.model";

@Injectable()
export default class EventService {


  constructor (private http: Http) {}

  getEvents (year: string, month: string): Observable<Activity[]> {
    let url = `./src/data/wikipedia-terrorist-events-${year}-${month}.json`;

    return this.http.get(url)
      .map(response => {
        let jsonResponse: string[] = response.json();
        return jsonResponse.map((activity) => new Activity(activity))
      });
  }
}
