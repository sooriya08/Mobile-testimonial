import {
  Component,
  Input,
  OnInit,
  SimpleChange,
  OnChanges,
} from '@angular/core';
import { Testinmony } from '../Models/testimony';
import {
  trigger,
  transition,
  state,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
    ]),
  ],
})
export class TestimonialComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() current: Testinmony;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    console.log('changes testimony', changes);
  }

  ngOnInit() {}
}
