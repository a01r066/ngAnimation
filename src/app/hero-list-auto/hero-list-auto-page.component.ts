import {Component} from '@angular/core';
import {HEROES} from '../../mock-heroes';

@Component({
  selector: 'app-hero-list-auto-page',
  template: `
    <section>
      <h1>Automatic Calculation</h1>
      <app-hero-list-auto [heroes]="heroes" (remove)="onRemoveHero($event)"></app-hero-list-auto>
    </section>
  `
})
export class HeroListAutoPageComponent {
  heroes = HEROES.slice();

  onRemoveHero(id: number){
    this.heroes = this.heroes.filter(hero => {
      return hero.id !== id;
    });
  }
}
