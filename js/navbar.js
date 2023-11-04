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