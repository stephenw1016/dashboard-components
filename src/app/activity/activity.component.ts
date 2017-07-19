import { Component } from '@angular/core';
import NumberService from '../shared/number.service';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [NumberService],
})
export default class ActivityComponent {

  constructor () {}

}
