//import pizzaImg from './pizza.jpg';

function createHome(h, p) {
    const home = document.createElement('div');
    home.classList.add('home');

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');
    
    const title = document.createElement('h1');
    title.textContent = h;

    const description = document.createElement('p');
    description.textContent = p;

    textContainer.appendChild(title);
    textContainer.appendChild(description);
    home.appendChild(textContainer);

    // const img = document.createElement('img');
    // img.src = pizzaImg;
    // home.appendChild(img);

    return home;
}

function createGallery() {
    const gallery = document.createElement('div');
    gallery.classList.add('gallery');

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const title = document.createElement('h1');
    title.textContent = 'Explore Our Summer Offerings';

    textContainer.appendChild(title);
    gallery.appendChild(textContainer);
    return gallery;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';

    main.appendChild(createHome(
        'Authentic Italian Flavours at the Heart of Vancouver.',
        'Fresh, Delicious, and Affordable.',
    ));

    main.appendChild(createGallery());
    
    console.log('Home loaded');
}

export default loadHome;