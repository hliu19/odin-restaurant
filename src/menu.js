function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createItem('Margherita', 'Tomato sauce, mozzarella, and basil', '$10'));
    menu.appendChild(createItem('Peperoni', 'Tomato sauce, mozzarella, and pepperoni', '$12'));
    menu.appendChild(createItem('Hawaiian', 'Tomato sauce, mozzarella, ham, and pineapple', '$14'));
    menu.appendChild(createItem('Meat Lovers', 'Tomato sauce, mozzarella, pepperoni, sausage, and bacon', '$16'));

    return menu;
}

function createItem(name, description, price) {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemName = document.createElement('h3');
    itemName.textContent = name;
    item.appendChild(itemName);

    const itemDesc = document.createElement('p');
    itemDesc.textContent = description;
    item.appendChild(itemDesc);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;
    item.appendChild(itemPrice);

    return item;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
    console.log('Menu loaded');
}

export default loadMenu;