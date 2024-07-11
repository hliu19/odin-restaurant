function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    
    const title = document.createElement('h2');
    title.textContent = 'Welcome to Papa\'s Pizza, Vancouver\'s Favourite Pizza Place since 1900.';

    const description = document.createElement('p');
    description.textContent = 'We use the best ingredients to make the best pizzas.';

    home.appendChild(title);
    home.appendChild(description);

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
    console.log('Home loaded');
}

export default loadHome;