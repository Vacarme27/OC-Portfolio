// NAVBAR / MENU HAMBURGER

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('overlay');
    const closeModal = document.getElementById('close-modal');
    let menuClicked = false;

    menuToggle.addEventListener('click', function () {
        overlay.style.display = 'block';
        menuClicked = true;
    });

    closeModal.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
    
    overlay.style.display = 'none';
    
    const logoLink = document.querySelector('.logo-link');
    logoLink.addEventListener('click', function () {
        menuClicked = false;
    });

    const contactLink = document.querySelector('.contact-link');
    contactLink.addEventListener('click', function () {
        menuClicked = false;
    });
    
    const menuItems = document.querySelectorAll('#menu a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuClicked = false;
        });
    });
});

//CARDS
const technologiesContainer = document.getElementById('technologies');

fetch('Data/Technologies/technologies.json')
    .then(response => response.json())
    .then(data => {
        const technologies = data.technologies;

        technologies.forEach(tech => {
            const card = document.createElement('div');
            card.classList.add('card', 'flippable');
            const cardFront = document.createElement('div');
            cardFront.classList.add('card-front');
            cardFront.textContent = '?';
            const cardBack = document.createElement('div');
            cardBack.classList.add('card-back');
            cardBack.textContent = tech.name;

            card.appendChild(cardFront);
            card.appendChild(cardBack);
            technologiesContainer.appendChild(card);

            card.addEventListener('click', function () {
                this.classList.toggle('flipped');
            });
        });
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
    });