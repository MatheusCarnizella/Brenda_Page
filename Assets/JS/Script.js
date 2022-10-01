/* Navbar 3D */

const menu = document.querySelector('#navegar');

function activeScroll(){
    menu.classList.toggle('ativar', scrollY > 100);
}

window.addEventListener('scroll', activeScroll);