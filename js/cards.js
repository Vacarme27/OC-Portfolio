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