import {Injectable} from "@angular/core";

@Injectable()
export default class NumberService {

  constructor () {}

  getTotal (): number {
    return Math.random() * 50;
  }
}
