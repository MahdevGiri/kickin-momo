import { Component } from '@angular/core';

interface MenuItem {
    name: string;
    price: string;
    description: string;
    image?: string;
}

interface MenuCategory {
    title: string;
    items: MenuItem[];
}

@Component({
    selector: 'app-full-menu',
    imports: [],
    templateUrl: './full-menu.html',
    styleUrl: './full-menu.scss'
})
export class FullMenu {
    menuCategories: MenuCategory[] = [
        {
            title: 'MOMOS (Choice of Veg / Chicken)',
            items: [
                { name: 'Steamed Momo', price: '$11.99', description: 'Juicy handmade dumplings steamed to perfection, served with our signature dipping sauce.', image: 'assets/images/steam-momo.png' },
                { name: 'Fried Momo', price: '$12.99', description: 'Golden crispy momos with a soft, flavorful filling inside - crunchy on the outside, juicy inside.', image: 'assets/images/fried-momo.png' },
                { name: 'Chilli Momo (C. Momo)', price: '$13.99', description: 'Crispy fried momos tossed in a bold Nepali chili garlic sauce with onions & peppers.', image: 'assets/images/chilli-momo.png' },
                { name: 'Cheese Momo', price: '$12.99', description: 'Steamed momos topped with melted cheese for a rich, creamy twist.', image: 'assets/images/cheese-momo.png' },
                { name: 'Jhol Momo', price: '$11.99', description: 'Steamed momos soaked in warm, spicy sesame-tomato gravy — a must try Nepali classic.', image: 'assets/images/jhol-momo.png' }
            ]
        },
        {
            title: 'BOWLS & RICE',
            items: [
                { name: 'Bulgogi Bowl', price: '$16.99', description: 'Beef Bulgogi served over fluffy rice with sautéed veggies.', image: 'assets/images/bulgogi-bowl.png' },
                { name: 'Loaded Rice - Nepali Fusion (Chicken / Beef / Mix)', price: '$12.99 - $13.99', description: 'Rice loaded with Nepali spices, sauces, and bold toppings, and your choice of chicken or beef.', image: 'assets/images/loaded-rice.png' }
            ]
        },
        {
            title: 'CHOWMEIN',
            items: [
                { name: 'Chowmein (Veg / Chicken / Beef / Mix)', price: '$13.99 - $15.99', description: 'Classic Nepali style stir-fried noodles with fresh vegetables and savory sauces.', image: 'assets/images/chowmein.png' }
            ]
        },
        {
            title: 'NEPALI BBQ & SPECIALS',
            items: [
                { name: 'Sekuwa with Fries', price: '$15.99', description: 'Authentic Nepali BBQ skewers marinated in Himalayan spices, served with fries.', image: 'assets/images/sekuwa-with-fries.png' },
                { name: 'Saphale (3 pcs)', price: '$11.99', description: 'Pan fried Nepali stuffed flatbread filled with seasoned meat and veggies — crispy & hearty.', image: 'assets/images/saphale.png' },
                { name: 'Sausage Flower with Cheese Stick', price: '$12.99', description: 'Deep fried spiral sausage paired with gooey mozzarella cheese stick and dipping sauce.', image: 'assets/images/sausage-flower-with-cheese-stick.png' },
                { name: 'Chilli Chicken', price: '$13.99', description: 'Crispy chicken stir-fried with peppers, onions, and garlic in a savory Indo-Chinese chili sauce.', image: 'assets/images/chilli-chicken.png' },
                { name: 'Yomari (Featured Nepali Sweet)', price: '$5.99', description: 'Soft steamed Nepali dumpling filled with warm caramel-like molasses and sesame.', image: 'assets/images/yomari.png' }
            ]
        },
        {
            title: 'FRIES',
            items: [
                { name: 'Tornado Potato (Spiral Potato on a Stick)', price: '$7.99', description: 'Crispy spiral-cut potato on a stick, seasoned with bold street-style spices.', image: 'assets/images/tornado-potato.png' },
                { name: 'Peri Peri Fries', price: '$6.99', description: 'Crispy fries tossed in zesty peri-peri seasoning with a hint of lemon.', image: 'assets/images/peri-peri-fries.png' },
                { name: 'Jalapeño Fries', price: '$7.99', description: 'Fries topped with crispy jalapenos for the perfect spicy crunch.', image: 'assets/images/jalapeno-fries.png' }
            ]
        },
        {
            title: 'DRINKS & SHAKES',
            items: [
                { name: 'Milkshakes (Oreo / Vanilla / Strawberry / Chocolate)', price: '$5.99', description: 'Thick, creamy, hand-blended milkshakes made fresh to cool the heat.', image: 'assets/images/milk-shakes.png' },
                { name: 'Soft Drinks & Water', price: '$1.99', description: 'Coke • Sprite • Coke Zero • Water • Red Bull', image: 'assets/images/sodas-and-water.png' }
            ]
        }
    ];
}
