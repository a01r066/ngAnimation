import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NgModule} from '@angular/core';
import {OpenCloseComponent} from './open-close/open-close.component';
import {OpenClosePageComponent} from './open-close/open-close-page.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import {StatusSliderPageComponent} from './status-slider/status-slider-page';
import { OpenCloseToggleComponent } from './open-close-toggle/open-close-toggle.component';
import {ToggleAnimationsPageComponent} from './toggle-animations-page.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave/hero-list-enter-leave.component';
import {HeroListEnterLeavePageComponent} from './hero-list-enter-leave-page.component';
import {CommonModule} from '@angular/common';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HeroListAutoComponent } from './hero-list-auto/hero-list-auto.component';
import {HeroListAutoPageComponent} from './hero-list-auto/hero-list-auto-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage'} },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage'}},
  { path: 'open-close', component: OpenClosePageComponent },
  { path: 'status-slider', component: StatusSliderPageComponent },
  { path: 'toggle', component: ToggleAnimationsPageComponent },
  { path: 'enter-leave', component: HeroListEnterLeavePageComponent },
  { path: 'auto', component: HeroListAutoPageComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OpenCloseComponent,
    OpenClosePageComponent,
    StatusSliderComponent,
    StatusSliderPageComponent,
    OpenCloseToggleComponent,
    ToggleAnimationsPageComponent,
    HeroListEnterLeaveComponent,
    HeroListEnterLeavePageComponent,
    HeroListPageComponent,
    HeroListAutoComponent,
    HeroListAutoPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
