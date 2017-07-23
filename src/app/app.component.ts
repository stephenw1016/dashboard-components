import { Component } from '@angular/core';

import NumberService from './shared/number.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NumberService]
})
export class AppComponent {

  constructor () {}

}
