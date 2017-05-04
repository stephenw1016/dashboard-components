import {Component, OnInit} from '@angular/core';

import '../assets/css/styles.css';
import NumberService from "./shared/number.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NumberService]
})
export class AppComponent implements OnInit {
  private total: number;

  constructor (private numberService: NumberService) {}

  ngOnInit () {
    this.total = 0;

    setInterval(() => {
      this.total += this.numberService.getTotal();
    }, 5000);
  }
}
