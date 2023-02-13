export default function initMostrarNoticias(){
  if(btn && noticias && noticiasArray){
  const noticiasAtivas = noticiasArray.filter((noticia, index) => {
    return index <= 5;
  });//filtra as 6 primeiras noticias
  
  noticiasAtivas.forEach(noticia => {
    noticia.classList.add('ativo');
  })//deixa visível as 6 primeiras noticias
  
  btn.addEventListener('click', toggleNoticias);
  btn.addEventListener('click', verMenos);
  
  
  function toggleNoticias(event){//mostra as outras 6 noticias
    event.preventDefault();
    noticias.forEach((noticia, index) => {
      if(index >= 6){
        noticia.classList.toggle('ativo');
      }
    })
  }
  
  function verMenos(){//muda o botão para ver menos se todas estiverem ativas
    const todasAtivas = noticiasArray.every(noticia => {
      return noticia.classList.contains('ativo');
    })
    if(todasAtivas){
      btn.innerText = 'Ver menos ▲';
    }else{
      btn.innerText = 'Ver mais ▼';
    }
  }
  }
  
}

const btn = document.querySelector('[data-btn]'); //botao ver mais
const noticias = document.querySelectorAll('.noticia');
const noticiasArray = Array.from(noticias);
