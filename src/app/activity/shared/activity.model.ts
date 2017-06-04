import { ActivityType } from './ActivityType';

export class Activity {

  private date: Date;
  private dead: number;
  private details: string;
  private injured: number;
  private location: Array<number>;
  private locationUrl: string;
  private locationName: string;
  private partOf: string;
  private perpetrator: string;
  private type: ActivityType;

  constructor (activity: any) {
    let injuryCount = parseInt(activity.injured, 10);
    let deathCount = parseInt(activity.dead, 10);

    this.date = activity.date;
    this.dead = isNaN(deathCount) ? 0 : deathCount;
    this.details = activity.details;
    this.injured = isNaN(injuryCount) ? 0 : injuryCount;
    this.location = activity.location;
    this.locationUrl = activity['location-url'];
    this.locationName = activity['location_name'];
    this.partOf = activity['part of'];
    this.perpetrator = activity.perpetrator;
    this.type = activity.type;
  }

  getDate () {
    return this.date;
  }

  getDead () {
    return this.dead;
  }

  getDetails () {
    return this.details;
  }

  getInjured () {
    return this.injured;
  }

  getLocation () {
    return this.location;
  }

  getLocationUrl () {
    return this.locationUrl;
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
