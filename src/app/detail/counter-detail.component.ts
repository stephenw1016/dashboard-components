import {Component, OnInit} from '@angular/core';

import NumberService from "../shared/number.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'counter-detail-component',
  templateUrl: './counter-detail.component.html',
  providers: [NumberService]
})
export default class CounterDetailComponent implements OnInit {
  private total: number;

  constructor (
    private numberService: NumberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.queryParams.subscribe((params: Params) => {
      console.log('total >>> ', params.start);
    });

    this.total = 0;

    setInterval(() => {
      this.total += this.numberService.getTotal();
    }, 5000);
  }

}
