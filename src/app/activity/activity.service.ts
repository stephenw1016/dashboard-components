import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Activity} from "./shared/activity.model";

@Injectable()
export default class ActivityService {

  constructor (private http: Http) {}

  getActivities (year: string, month: string): Observable<Activity[]> {
    let url = `./src/data/wikipedia-terrorist-events-${year}-${month}.json`;

    return this.http.get(url)
      .map(response => {
        let jsonResponse: string[] = response.json();
        return jsonResponse.map((activity) => new Activity(activity))
      });
  }
}
