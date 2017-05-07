import {Component, OnInit} from '@angular/core';

import NumberService from "../shared/number.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'counter-detail-component',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css'],
  providers: [NumberService]
})
export default class CounterDetailComponent implements OnInit {
  // private total: number;
  private total: Observable<number>;

  constructor (
    private numberService: NumberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.total =  Observable.of(0);

    this.route.queryParams.subscribe((params: Params) => {
      console.log('total >>> ', params.start);
      this.total = Observable.of(params.start);
    });

    // this.total = 0;

    // setInterval(() => {
    //   this.total += this.numberService.getTotal();
    // }, 5000);
  }

}
