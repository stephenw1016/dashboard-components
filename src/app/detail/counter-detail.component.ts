import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Observable} from "rxjs/Observable";

import NumberService from "../shared/number.service";
import DataService from "../shared/data.service";

@Component({
  selector: 'counter-detail-component',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css'],
  providers: [NumberService, DataService]
})
export default class CounterDetailComponent implements OnInit {
  private total: Observable<number>;

  constructor (
    private numberService: NumberService,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.dataService.getData().subscribe((a) => console.log(a));

    this.route.queryParams.subscribe((params: Params) => {
      this.total = Observable
        .interval(5000)
        .flatMap(() => Observable.of(this.numberService.getRandomNumber(params.start)));
    });
  }
}
