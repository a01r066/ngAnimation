import {Component, HostBinding} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers goes here
  ]
})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisable = false;

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleAnimations(){
    this.animationsDisable = !this.animationsDisable;
  }
}
