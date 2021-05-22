            //SCRIPT DEL NAVBAR//
const ham = document.querySelector('.ham');

const li = document.querySelector('.menu_items') ;

const barras = document.querySelectorAll('.ham span')

ham.addEventListener('click', () => {
    li.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
})



