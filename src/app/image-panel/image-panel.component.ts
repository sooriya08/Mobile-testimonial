import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Testinmony } from '../Models/testimony';
import {
  trigger,
  transition,
  state,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-image-panel',
  templateUrl: './image-panel.component.html',
  styleUrls: ['./image-panel.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
  ],
})
export class ImagePanelComponent implements OnInit {
  @Input() current: Testinmony;
  currentLocal: Testinmony;

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    console.log('changes panel', changes);
    setTimeout(() => {
      this.currentLocal = this.current;
    }, 1000);
  }

  ngOnInit() {}
}
