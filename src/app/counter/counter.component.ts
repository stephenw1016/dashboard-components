import {Component, OnInit, Input, OnChanges, SimpleChanges, HostListener, EventEmitter} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import {PrettyNumberPipe} from '../shared/pretty-number.pipe';

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
  @Input() private title: string;
  @Input() private value: number;
  @Input() private duration: number;

  @HostListener('mouseover', ['$event.target'])
  showValue ($event:EventEmitter<string>): void {
    console.log(this.value);
  }

  private isIncreasing: boolean;
  private isDecreasing: boolean;
  private prettyNumberPipe: PrettyNumberPipe;
  private num: number;
  private refreshInterval: number;
  private steps: number;
  private step: number;
  private countTo: number;
  private increment: number;
  private animationFrameId: number;
  private displayValue: string;
  private counterState: string;

  constructor () {
    this.prettyNumberPipe = new PrettyNumberPipe();
  }

  ngOnInit () {
    this.isIncreasing = false;
    this.isDecreasing = false;
    this.displayValue = '0';
    this.refreshInterval = 30;
    this.steps = Math.ceil(this.duration / this.refreshInterval);
  }

  ngOnChanges (changes: SimpleChanges) {
    let change = changes.value;
    this.countIt(change.currentValue, change.previousValue);
  }

  countIt (newValue = 0, oldValue = 0) {
    if (newValue !== oldValue) {
      this.counterState = newValue > oldValue ? 'increasing' : 'decreasing';
      this.isIncreasing = this.counterState === 'increasing';
      this.isDecreasing = this.counterState !== 'increasing';
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
        this.num = this.countTo;
        this.displayValue = this.prettyNumberPipe.transform(this.num, 1);
        this.counterState = '';
        this.isIncreasing = false;
        this.isDecreasing = false;
      } else {
        this.displayValue = this.prettyNumberPipe.transform(Math.round(this.num), 1);
        this.tick();
      }
    });
  }
}
