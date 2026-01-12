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
      name: 'Chilli Momos',
      description: 'Juicy dumplings tossed in a spicy, tangy chilli sauce with bell peppers and onions.',
      image: 'assets/images/chilli_momo.png'
    },
    {
      name: 'Chicken Chow Mein',
      description: 'Stir-fried noodles with marinated chicken, fresh vegetables, and an authentic blend of exotic spices.',
      image: 'assets/images/chowmein.png'
    },
    {
      name: 'Sekuwa & Rice',
      description: 'Grilled marinated meat skewers cooked over an open flame, served with rice and pickles.',
      image: 'assets/images/sekuwa.png'
    },
    {
      name: 'Momo burger',
      description: 'A juicy, handcrafted burger with beef patty, pressed momo and fresh toppings.',
      image: 'assets/images/handsome_burger.png'
    }
  ];
}
