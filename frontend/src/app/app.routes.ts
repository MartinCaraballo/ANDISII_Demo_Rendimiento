import { Routes } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { CarouselSectionComponent } from './components/carousel-section/carousel-section.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'carousel', component: CarouselSectionComponent },
  { path: 'header', component: HeaderComponent }
];
