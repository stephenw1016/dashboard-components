import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Activity} from '../shared/activity.model';

@Component({
  selector: 'activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export default class ActivityListComponent implements OnChanges {

  @Input() private activities: Array<Activity>;

  constructor() {}

  ngOnChanges (changes: SimpleChanges) {
    if (changes.activities && !changes.activities.isFirstChange()) {
      console.log('>>>>>', changes);
    }
  }
}
