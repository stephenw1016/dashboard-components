import { ActivityType } from './ActivityType';

export class Activity {

  private date: number;
  private deaths: number;
  private details: string;
  private injuries: number;
  private location: Array<number>;
  private locationName: string;
  private partOf: string;
  private perpetrator: string;
  private type: ActivityType;

  constructor (activity: any) {
    this.date = activity.date;
    this.deaths = activity.deaths;
    this.details = activity.details;
    this.injuries = activity.injuries;
    this.location = activity.location;
    this.locationName = activity.locationName;
    this.partOf = activity.partOf;
    this.perpetrator = activity.perpetrator;
    this.type = activity.type;
  }

  getDate () {
    return this.date;
  }

  getDeaths () {
    return this.deaths;
  }

  getDetails () {
    return this.details;
  }

  getInjuries () {
    return this.injuries;
  }

  getLocation () {
    return this.location;
  }

  getLocationName () {
    return this.locationName;
  }

  getPartOf () {
    return this.partOf;
  }

  getPerpetrator () {
    return this.perpetrator;
  }

  getType () {
    return this.type;
  }
}
