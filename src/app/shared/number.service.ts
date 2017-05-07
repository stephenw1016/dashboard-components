import {Injectable} from "@angular/core";

@Injectable()
export default class NumberService {

  constructor () {}

  getRandomNumber (max: number = 100): number {
    console.log(max);
    return Math.random() * max;
  }
}
