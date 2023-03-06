export default function initAnimacaoAoScroll(){

  
const sections = document.querySelectorAll('[data-anime="scroll"]');
const titulos = document.querySelectorAll('[data-anime="titulo"]');
console.log(sections)
const MetadeTela = window.innerHeight * 0.6;

if(sections){
  function animaScroll(){
    sections.forEach((section, index)=>{
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisivel = (sectionTop - MetadeTela) < 0;
     
      if(sectionVisivel){
        if(index % 2 === 0){//se for par
          section.classList.add('right');
        }else{//se for impar
          section.classList.add('left')
        }

      }
    })
  }
  
  animaScroll();
  
  window.addEventListener('scroll', animaScroll);
}

}


