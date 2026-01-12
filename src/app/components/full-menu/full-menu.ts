import { Component } from '@angular/core';

interface MenuItem {
    name: string;
    price: string;
    description: string;
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
            title: 'MOMOS (Choice of Veg / Chicken / Cheese)',
            items: [
                { name: 'Steamed Momo', price: '$11.99', description: 'Juicy handmade dumplings steamed to perfection, served with our signature Nepali dipping sauce.' },
                { name: 'Fried Momo', price: '$13.99', description: 'Golden crispy momos with a soft, flavorful filling inside — crunchy on the outside, juicy inside.' },
                { name: 'Chilli Momo (C. Momo)', price: '$13.99', description: 'Crispy fried momos tossed in a bold Nepali chili garlic sauce with onions & peppers.' },
                { name: 'Cheese Momo', price: '$13.99', description: 'Crispy fried momos topped with melted cheese.' },
                { name: 'Jhol Momo (Nepali Special)', price: '$14.99', description: 'Steamed momos soaked in warm, spicy sesame-tomato gravy — a must-try Nepali classic.' }
            ]
        },
        {
            title: 'BOWLS & RICE',
            items: [
                { name: 'Beef Bowl', price: '$18.99', description: 'Tender steak grilled fresh and served over fluffy purple rice with sautéed veggies and garlic butter.' },
                { name: 'Mix Loaded Rice - Nepali Fusion (Chicken / Beef)', price: '$11.99 / $12.99', description: 'Rice loaded with Nepali spices, sauces, and bold toppings, and your choice of chicken or beef.' }
            ]
        },
        {
            title: 'CHOW MEIN',
            items: [
                { name: 'Chow Mein (Chicken / Beef / Mix)', price: '$14.99 / $15.99 / $16.99', description: 'Classic Nepali-style stir-fried noodles with fresh vegetables and savory sauces.' }
            ]
        },
        {
            title: 'WRAPS & MORE',
            items: [
                { name: 'Wraptor – Tender Chicken Wrap', price: '$10.99', description: 'Crispy grilled wrap stuffed with tender chicken, melted cheese, buttery toasted, and perfectly satisfying.' },
                { name: 'Momo Burger', price: '$12.99', description: 'Juicy momo patty layered with cheese, fresh veggies, and Kickin’ special sauce.' }
            ]
        },
        {
            title: 'NEPALI BBQ & SPECIALS',
            items: [
                { name: 'Sekuwa with Spiral Potato', price: '$16.99', description: 'Authentic Nepali BBQ skewers marinated in Himalayan spices, served with crispy spiral potato.' },
                { name: 'Saphale (3 pcs)', price: '$10.99', description: 'Pan-fried Nepali stuffed flatbread filled with seasoned meat or veggies — crispy & hearty.' },
                { name: 'Sausage Flower with Cheese Stick', price: '$12.99', description: 'Deep-fried spiral sausage paired with gooey mozzarella cheese stick and dipping sauce.' }
            ]
        },
        {
            title: 'FRIES',
            items: [
                { name: 'Peri-Peri Fries', price: '$6.49', description: 'Crispy fries tossed in zesty peri-peri seasoning with a hint of lemon.' },
                { name: 'Kickin Loaded Fries', price: '$12.99', description: 'Fries loaded with cheese sauce, spicy toppings, and bold Kickin flavors.' },
                { name: 'Jalapeño Fries', price: '$8.99', description: 'Fries topped with crispy jalapeños for the perfect spicy crunch.' }
            ]
        },
        {
            title: 'BEST OF KICKIN COMBOS',
            items: [
                { name: 'Momo + Fries + Drink', price: '$18.99', description: 'Your choice of steamed or fried momos served with fries and a drink.' },
                { name: 'Chilli Momo + Loaded Rice + Drink', price: '$19.99', description: 'Spicy chili momos paired with flavorful loaded rice and a refreshing drink.' },
                { name: 'Sekuwa + Rice + Drink', price: '$20.99', description: 'Nepali BBQ sekuwa served with rice and drink — bold, smoky, and filling.' },
                { name: 'Momo Burger + Fries + Drink', price: '$18.99', description: 'Our popular momo burger combo with crispy fries and a drink.' },
                { name: 'Beef Bowl + Purple Rice + Drink', price: '$22.99', description: 'Beef bowl with purple rice, fries, and drink — premium flavor on wheels.' }
            ]
        },
        {
            title: 'DRINKS & SHAKES',
            items: [
                { name: 'Milkshakes (Oreo / Vanilla / Strawberry / Chocolate)', price: '$5.59', description: 'Thick, creamy, hand-blended milkshakes made fresh to cool the heat.' },
                { name: 'Soft Drinks & Water', price: '$1.99', description: 'Coke • Sprite • Coke Zero • Water' }
            ]
        }
    ];
}
