import _ from 'lodash';
import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function createHeader() {
    const header = document.createElement('header');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h1');

    header.classList.add('header');
    titleContainer.classList.add('title-container');
    title.textContent = 'Papa\'s Pizza';

    titleContainer.appendChild(title);
    header.appendChild(titleContainer);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const home_button = document.createElement('button');
    const menu_button = document.createElement('button');
    const contact_button = document.createElement('button');

    home_button.classList.add("nav-button");
    home_button.addEventListener('click', () => {
        setActivePage(home_button);
        loadHome();
    })

    menu_button.classList.add("nav-button");
    menu_button.addEventListener('click', () => {
        setActivePage(menu_button);
        loadMenu();
    })

    contact_button.classList.add("nav-button");
    contact_button.addEventListener('click', () => {
        setActivePage(contact_button);
        loadContact();
    })

    home_button.textContent = 'Home';
    menu_button.textContent = 'Menu';
    contact_button.textContent = 'Contact';

    nav.appendChild(home_button);
    nav.appendChild(menu_button);
    nav.appendChild(contact_button);

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    const copyright = document.createElement('p');
    copyright.textContent = 'Copyright Harry Liu 2024';
    footer.appendChild(copyright);
    return footer;
}

function init() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
    setActivePage(document.querySelector('.nav-button'));
}

function setActivePage(button) {
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });
    button.classList.add('active');
}

init();

