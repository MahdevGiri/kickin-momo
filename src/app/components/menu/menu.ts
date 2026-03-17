import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  menuItems = [
    {
      name: 'C. Momo',
      description: 'Juicy dumplings tossed in a spicy, tangy chilli sauce with bell peppers and onions.',
      image: 'assets/images/chilli-momo.png'
    },
    {
      name: 'Chowmein',
      description: 'Classic Nepali style stir-fried noodles with fresh vegetables and savory sauces.',
      image: 'assets/images/chowmein.png'
    },
    {
      name: 'Sekuwa with Fries',
      description: 'Authentic Nepali BBQ skewers marinated in Himalayan spices, served with fries.',
      image: 'assets/images/sekuwa-with-fries.png'
    },
    {
      name: 'Bulgogi Bowl',
      description: 'Sweet and savory marinated beef bulgogi served over fluffy rice with homemade kimchi and sautéed greens.',
      image: 'assets/images/bulgogi-bowl.png'
    }
  ];
}
