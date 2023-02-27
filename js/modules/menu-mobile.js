import outsideClick from "./outsideclick.js";


export default function initMenuMobile(){
  
}

const btnMenu = document.querySelector('[data-menu="button"]');
const menuLista = document.querySelector('[data-menu="lista"]');
const eventos = ['click'];

eventos.forEach(userEvent =>{
  btnMenu.addEventListener(userEvent, ativarMenu);
})


function ativarMenu(){
  menuLista.classList.toggle('active');
  btnMenu.classList.toggle('active');
  outsideClick(menuLista, eventos, () =>{
    menuLista.classList.remove('active');
    btnMenu.classList.remove('active');
  })

}