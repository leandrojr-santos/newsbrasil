export default function initModal(){
  if(abrirModal && fecharModal && modalContainer && modalSubmit){
    const abrirModal = document.querySelector('[data-modal="abrir"]');
    const fecharModal = document.querySelector('[data-modal="fechar"]');
    const modalContainer = document.querySelector('.modal-container');
    const modalSubmit = document.querySelector('.modal button[type="submit"]');
  
    function toggleModal(event){
      event.preventDefault()
      modalContainer.classList.toggle('ativo');
    }
  
    function cliqueForaModal(event){
      if(event.target === this){
      modalContainer.classList.remove('ativo');
      }
    }
  
    function botaoSubmit(event){
      event.preventDefault();
    }
  
    abrirModal.addEventListener('click', toggleModal);
    fecharModal.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', cliqueForaModal);
    modalSubmit.addEventListener('click', botaoSubmit);
  }
}


