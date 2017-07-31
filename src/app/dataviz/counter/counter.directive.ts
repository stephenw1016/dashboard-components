import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { PrettyNumberPipe } from '../../shared/pretty-number/pretty-number.pipe';


@Directive({
  selector: '[swCounter]'
})
export default class CounterDirective implements OnInit, OnChanges {
  @Input() private value: Number;
  @Input() private duration: number;
  @Output() private direction: EventEmitter<String> = new EventEmitter<String>();

  private element: ElementRef;
  private animationFrameId: number;
  private countTo: number;
  private increment: number;
  private num: number;
  private prettyNumberPipe: PrettyNumberPipe;
  private refreshInterval: number;
  private steps: number;

  constructor (el: ElementRef) {
    this.element = el;
    this.prettyNumberPipe = new PrettyNumberPipe();
  }

  ngOnInit () {
    this.element.nativeElement.innerText = 0;
    this.refreshInterval = 30;
    this.steps = Math.ceil(this.duration / this.refreshInterval);
  }

  ngOnChanges (changes: SimpleChanges) {
    let change = changes.value;
    let currentValue = change.currentValue;
    let previousValue = change.previousValue;

    if (currentValue !== previousValue) {
      this.countIt(currentValue, previousValue);
    }
  }

  countIt (newValue = 0, oldValue = 0) {
    this.direction.emit(newValue > oldValue ? 'increasing' : 'decreasing');
    this.animationFrameId = null;
    this.countTo = newValue;
    this.increment = (newValue - oldValue) / this.steps;
    this.num = oldValue;
    this.tick(0);
  }

  tick (step: number) {
    this.animationFrameId = window.requestAnimationFrame(() => {
      this.num += this.increment || 0;
      step++;

      if (step >= this.steps) {
        window.cancelAnimationFrame(this.animationFrameId);
        this.element.nativeElement.innerText = this.prettyNumberPipe.transform(this.countTo, 1);
        this.direction.emit();
      } else {
        this.element.nativeElement.innerText = this.prettyNumberPipe.transform(Math.round(this.num), 1);
        this.tick(step);
      }
    });
  }
}
