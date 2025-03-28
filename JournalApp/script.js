// $(".bi.bi-list").click(function () {
//     $(".mostrar-menu").toggle();
// });

// const Lista = document.getElementsByTagName('li')
// console.log(Lista);


const todosLosLi = document.querySelectorAll('li');
console.log(todosLosLi); // NodeList con todos los elementos <li>

const menuIzquierda = document.querySelector('.menu-izquierda');
const liEnMenuIzquierda = menuIzquierda.querySelectorAll('li');
console.log(liEnMenuIzquierda);

const primerUl = document.querySelector('ul');
const primerLi = primerUl.querySelector('li');
console.log(primerLi);