import { Component } from '@angular/core';
import NumberService from '../shared/number.service';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [NumberService],
})
export default class ActivityComponent {

  private activityLinks: Array<Object>;

  constructor () {
    this.activityLinks = [
      { url: 'activities/2015', label: '2015' },
      { url: 'activities/2016', label: '2016' },
      { url: 'activities/2017', label: '2017' },
      { url: 'activities/2015/05', label: 'May 2015' },
      { url: 'activities/2015/06', label: 'June 2015' },
      { url: 'activities/2015/07', label: 'July 2015' },
      { url: 'activities/2015/08', label: 'August 2015' },
      { url: 'activities/2015/09', label: 'September 2015' },
      { url: 'activities/2015/10', label: 'October 2015' },
      { url: 'activities/2015/11', label: 'November 2015' },
      { url: 'activities/2015/12', label: 'December 2015' },
      { url: 'activities/2016/01', label: 'January 2016' },
      { url: 'activities/2016/02', label: 'February 2016' },
      { url: 'activities/2016/03', label: 'March 2016' },
      { url: 'activities/2016/04', label: 'April 2016' },
      { url: 'activities/2016/05', label: 'May 2016' },
      { url: 'activities/2016/06', label: 'June 2016' },
      { url: 'activities/2016/07', label: 'July 2016' },
      { url: 'activities/2016/08', label: 'August 2016' },
      { url: 'activities/2016/09', label: 'September 2016' },
      { url: 'activities/2016/10', label: 'October 2016' },
      { url: 'activities/2016/11', label: 'November 2016' },
      { url: 'activities/2016/12', label: 'December 2016' },
      { url: 'activities/2017/01', label: 'January 2017' },
      { url: 'activities/2017/02', label: 'February 2017' },
      { url: 'activities/2017/03', label: 'March 2017' },
      { url: 'activities/2017/04', label: 'April 2017' },
      { url: 'activities/2017/05', label: 'May 2017' }
    ];
  }

}
