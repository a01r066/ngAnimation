import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-list-enter-leave',
  template: `
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          [@flyInOut]="'in'" (click)="removeHero(hero.id)">
        <div class="inner">
          <span class="badge">{{ hero.id }}</span>
          <span>{{ hero.name }}</span>
        </div>
      </li>
    </ul>
    `,
  styleUrls: ['../hero-list-page/hero-list-page.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HeroListEnterLeaveComponent implements OnInit {
  @Input() heroes: Hero[];
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeHero(id: number){
    this.remove.emit(id);
  }
}
