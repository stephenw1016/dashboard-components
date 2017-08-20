import { Injectable } from '@angular/core';

import * as d3Collection from 'd3-collection';

@Injectable()
export default class AnalyticsService {

  /**
   *
   * @param data
   * @param {string} prop
   * @returns {any}
   */
  nest (data: any, prop: string): any {
    return d3Collection.nest()
      .key((d: any) => d[prop].toString().toLowerCase())
      .entries(data);
  }

}
