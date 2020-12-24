import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../hero';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-hero-list-auto',
  templateUrl: './hero-list-auto.component.html',
  styleUrls: ['../hero-list-page/hero-list-page.component.css'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
export class HeroListAutoComponent implements OnInit {
  @Input() heroes: Hero[];
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeHero(id: number){
    this.remove.emit(id);
  }
}
