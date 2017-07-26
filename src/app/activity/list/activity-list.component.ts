import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Activity} from '../shared/activity.model';

@Component({
  selector: 'sw-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export default class ActivityListComponent implements OnChanges {

  @Input() public activities: Array<Activity>;

  ngOnChanges (changes: SimpleChanges) {
    if (changes.activities && !changes.activities.isFirstChange()) {
      console.log('>>>>>', this.activities);
    }
  }
}
