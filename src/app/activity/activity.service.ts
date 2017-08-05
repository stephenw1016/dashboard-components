import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Activity} from './shared/activity.model';

@Injectable()
export default class ActivityService {

  constructor (private http: Http, private db: AngularFireDatabase, private afAuth: AngularFireAuth) {}

  getActivities (year: string, month: string): Observable<Activity[]> {
    let url = month ?
      `./src/data/wikipedia-terrorist-events-${year}-${month}.json` :
      `./src/data/events-${year}.json`;

    // this.afAuth.auth.signInAnonymously();
    // return this.db.list('/activities');

    return this.http.get(url)
      .map((response: any) => {
        return response.json().map((activity: object) => this.toActivity(activity));
      });
  }

  toActivity (activity: any) {
    let injuryCount = parseInt(activity.injured, 10);
    let deathCount = parseInt(activity.dead, 10);

    return new Activity({
      date:  Date.parse(activity.date) ? new Date(activity.date).getTime() : null,
      deaths:  isNaN(deathCount) ? 0 : deathCount,
      details:  activity.details || '',
      injuries:  isNaN(injuryCount) ? 0 : injuryCount,
      location:  activity.location || [],
      locationName:  activity['location_name'] || '',
      partOf:  activity['part of'] || '',
      perpetrator:  activity.perpetrator || '',
      type:  activity.type || ''
    });
  }

  validate (activity: any): boolean {
    if (!Date.parse(activity.date)) {
      console.log('INVALID DATE', activity);
      return false;
    }
    if (isNaN(activity.dead)) {
      console.log('INVALID DEATHS', activity);
      return false;
    }

    return true;
  }
}
