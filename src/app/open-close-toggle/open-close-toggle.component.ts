import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-open-close-toggle',
  templateUrl: './open-close-toggle.component.html',
  styleUrls: ['./open-close-toggle.component.css'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        width: '250px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ]
})
export class OpenCloseToggleComponent implements OnInit {
  isDisabled = false;
  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAnimations(){
    this.isDisabled = !this.isDisabled;
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }
}
