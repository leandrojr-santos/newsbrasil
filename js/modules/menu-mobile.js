import outsideClick from "./outsideclick.js";


export default function initMenuMobile(){
  
}

const btnMenu = document.querySelector('[data-menu="button"]');
const menuLista = document.querySelector('[data-menu="lista"]');
const eventos = ['click', 'touchstart'];

eventos.forEach(userEvent =>{
  btnMenu.addEventListener(userEvent, ativarMenu);
})

btnMenu.addEventListener('click', ativarMenu);
btnMenu.addEventListener('touchstart', ativarMenu);

function ativarMenu(){
  menuLista.classList.add('active');
  btnMenu.classList.add('active');
  outsideClick(menuLista, eventos, () =>{
    menuLista.classList.remove('active');
    btnMenu.classList.remove('active');
  })

}