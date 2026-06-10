// le menu burger
const burger = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');


burger.addEventListener('click', () =>{


    //Ouvre / ferme le menu
    navLinks.classList.toggle('active');

    // change l'icone : bars par X time
    const icon = burger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');



});

// ferme le menu en cliquant sur un lien 

const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = burger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
        
})




