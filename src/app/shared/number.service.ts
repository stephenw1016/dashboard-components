import { Injectable } from '@angular/core';

@Injectable()
export default class NumberService {

  constructor () {}

  getRandomNumber (max: number = 100): number {
    return Math.random() * max;
  }
}
