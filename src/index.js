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
    title.textContent = 'PAPA\'S PIZZA';

    titleContainer.appendChild(title);
    header.appendChild(titleContainer);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.classList.add("nav-link");
    home.addEventListener('click', () => {
        setActivePage(home);
        loadHome();
    })

    menu.classList.add("nav-link");
    menu.addEventListener('click', () => {
        setActivePage(menu);
        loadMenu();
    })

    contact.classList.add("nav-link");
    contact.addEventListener('click', () => {
        setActivePage(contact);
        loadContact();
    })

    home.textContent = 'HOME';
    menu.textContent = 'MENU';
    contact.textContent = 'CONTACT';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

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
    setActivePage(document.querySelector('.nav-link'));
}

function setActivePage(link) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        link.classList.remove('active');
    });
    link.classList.add('active');
}

init();

