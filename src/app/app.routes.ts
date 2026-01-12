import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { FullMenu } from './components/full-menu/full-menu';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'menu', component: FullMenu }
];
