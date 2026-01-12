import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Menu } from '../menu/menu';
import { Location } from '../location/location';

@Component({
    selector: 'app-home',
    imports: [Hero, About, Menu, Location],
    templateUrl: './home.html',
    styleUrl: './home.scss'
})
export class Home { }
