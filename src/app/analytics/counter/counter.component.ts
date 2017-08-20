import { Component, Input, HostListener, EventEmitter, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'sw-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  animations: [
    trigger('counterState', [
      state('increasing', style({ color: '#44b058' })),
      state('decreasing', style({ color: '#ca3f30' })),
      transition('* <=> *', animate('200ms ease-out'))
    ])
  ],
  encapsulation: ViewEncapsulation.Native
})
export default class CounterComponent {

  @Input() public duration: number;
  @Input() public title: string;
  @Input() public value: number;

  public counterState: string;

  @HostListener('mouseover', ['$event.target'])
  showValue ($event: EventEmitter<string>): void {
    console.log(this.value);
  }

  setCounterState (direction = '') {
    this.counterState = direction;
  }

}
