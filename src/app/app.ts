import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Menu } from './components/menu/menu';
import { Location } from './components/location/location';
import { Footer } from './components/footer/footer';
import { Feedback } from './components/feedback/feedback';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Menu, Location, Feedback, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'nepalese-food-truck';
}
