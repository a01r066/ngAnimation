import {Component} from '@angular/core';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-hero-list-enter-leave-page',
  template: `
    <section>
      <h1>Enter/Leave</h1>
      <app-hero-list-enter-leave [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-enter-leave>
    </section>
  `
})
export class HeroListEnterLeavePageComponent {
  heroes = HEROES.slice();

  onRemove(id: number){
    this.heroes = this.heroes.filter(hero => {
      return hero.id !== id;
    });
  }
}
