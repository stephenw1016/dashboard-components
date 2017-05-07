import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs/Observable";

import NumberService from "../shared/number.service";

@Component({
  selector: 'counter-detail-component',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css'],
  providers: [NumberService]
})
export default class CounterDetailComponent implements OnInit {
  private total: Observable<number>;

  constructor (
    private numberService: NumberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.route.queryParams.subscribe((params: Params) => {
      this.total = Observable.of(params.start);
    });

    this.total = Observable
      .interval(5000)
      .flatMap(() => {
        return Observable.of(this.numberService.getTotal());
      });
  }
}
