import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations'

import {PrettyNumberPipe} from '../shared/pretty-number.pipe'

@Component({
  selector: 'saw-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  animations: [
    trigger('counterState', [
      state('increasing', style({ color: '#44b058' })),
      state('decreasing', style({ color: '#ca3f30' })),
      transition('* <=> *', animate('200ms ease-out'))
    ])
  ]
})
export default class CounterComponent implements OnChanges, OnInit {
  @Input() private value: number;
  @Input() private duration: number;

  private prettyNumberPipe: PrettyNumberPipe;
  private num: number;
  private refreshInterval: number;
  private steps: number;
  private step: number;
  private countTo: number;
  private increment: number;
  private animationFrameId: number;
  private displayValue: string = '0';
  private counterState: string;

  constructor () {
    this.prettyNumberPipe = new PrettyNumberPipe();
  }

  ngOnInit () {
    this.refreshInterval = 30;
    this.steps = Math.ceil(this.duration / this.refreshInterval);
  }

  ngOnChanges (changes:SimpleChanges) {
    let change = changes.value;
    this.countIt(change.currentValue, change.previousValue);
  }

  countIt (newValue: number = 0, oldValue: number = 0) {
    if (newValue !== oldValue) {
      this.counterState = newValue > oldValue ? 'increasing' : 'decreasing';
    }
    this.step = 0;
    this.animationFrameId = null;
    this.countTo = newValue;
    this.increment = (newValue - oldValue) / this.steps;
    this.num = oldValue;
    this.tick();
  }

  tick () {
    this.animationFrameId = window.requestAnimationFrame(() => {
      this.num += this.increment || 0;
      this.step++;
      if (this.step >= this.steps) {
        window.cancelAnimationFrame(this.animationFrameId);
        this.counterState = '';
        this.num = this.countTo;
        this.displayValue = this.prettyNumberPipe.transform(this.num, 1);
      } else {
        this.displayValue = this.prettyNumberPipe.transform(Math.round(this.num), 1);
        this.tick();
      }
    });
  }
}
