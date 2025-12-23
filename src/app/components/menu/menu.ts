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
      name: 'Steamed Momos',
      description: 'Hand-wrapped dumplings filled with spiced chicken or vegetables, served with our signature sesame-tomato chutney.',
      price: '$10.00',
      image: 'assets/images/momo.png'
    },
    {
      name: 'Chicken Chow Mein',
      description: 'Stir-fried noodles with marinated chicken, fresh vegetables, and an authentic blend of exotic spices.',
      price: '$12.00',
      image: 'assets/images/chowmein.png'
    },
    {
      name: 'Sekuwa & Rice',
      description: 'Grilled marinated meat skewers cooked over an open flame, served with rice and pickles.',
      price: '$14.00',
      image: 'assets/images/sekuwa.png'
    },
    {
      name: 'Handsome burger',
      description: 'A juicy, handcrafted burger with fresh toppings.',
      price: '$13.00',
      image: 'assets/images/handsome_burger.png'
    }
  ];
}
