function createMenu(items, title = 'Menu') {
    const menu = document.createElement('div');
    const menuContainer = document.createElement('div');
    const menuTitle = document.createElement('h1');
    
    menuTitle.textContent = title;
    menuContainer.classList.add('menu-container');

    menu.appendChild(menuTitle);
    menu.appendChild(menuContainer);
    menu.classList.add('menu');

    for (let i = 0; i < items.length; i++) {
        menuContainer.appendChild(createItemElement(items[i].name, items[i].description, items[i].price));
    }

    return menu;
}

function createItemElement(name, description, price) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemName = document.createElement('h3');
    itemName.textContent = name;
    itemName.classList.add('item-name');
    item.appendChild(itemName);

    const itemDesc = document.createElement('p');
    itemDesc.textContent = description;
    itemDesc.classList.add('item-description');
    item.appendChild(itemDesc);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;
    itemPrice.classList.add('item-price');
    item.appendChild(itemPrice);


    return item;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';

    main.appendChild(createMenu(
        [
            { name: 'Margherita', description: 'Tomato sauce, mozzarella, and basil. Cooked in a pizza oven. Finished with Parmesan cheese. You can even add some basil on it if you want.', price: '$10' },
            { name: 'Peperoni', description: 'Tomato sauce, mozzarella, and pepperoni', price: '$12' },
            { name: 'Hawaiian', description: 'Tomato sauce, mozzarella, ham, and pineapple', price: '$14' },
            { name: 'Meat Lovers', description: 'Tomato sauce, mozzarella, pepperoni, sausage, and bacon', price: '$16' },
        ],
        'PIZZA'
    ));

    main.appendChild(createMenu(
        [
            { name: 'Sphagetti', description: 'Tomato sauce, mozzarella, and spinach', price: '$8' },
            { name: 'Carbonara', description: 'Tomato sauce, mozzarella, and eggs', price: '$10' },
            { name: 'Quattro Formaggi', description: 'Tomato sauce, mozzarella, and cheese', price: '$12' },
        ],
        'PASTA'
    ))

    console.log('Menu loaded');
}

export default loadMenu;