function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    return contact;
}  

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
    console.log('Contact loaded');
}

export default loadContact;