const azul = document.getElementById("azul");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

const menu = document.getElementById("menu");
const btnAbrir = document.getElementById("abrir");
// const btnFechar = document.getElementById("fechar");

const opcaoMenu1 = document.querySelector(".opcaoMenu1");
const opcaoMenu2 = document.querySelector(".opcaoMenu2");
const opcaoMenu3 = document.querySelector(".opcaoMenu3");


opcaoMenu1.addEventListener('click', function(){
    menu.classList.remove("ativo");
});
opcaoMenu2.addEventListener('click', function(){
    menu.classList.remove("ativo");
});
opcaoMenu3.addEventListener('click', function(){
    menu.classList.remove("ativo");
});


//MENUH
function abrirMenu(event){
    menu.classList.toggle("ativo")
}

btnAbrir.addEventListener('click', function(){
    abrirMenu()
});


//COBRIR AZUL
// function coverBackground(event){
//     azul.classList.toggle("cover");
//     titulo.classList.toggle("titulo-slide");
//     texto.classList.toggle("texto-show")
// }

// window.addEventListener('click', function(){
//     coverBackground()
// });


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll(); //ativar a função independente da interação do usuario

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
} //nao ativar caso nao tenha elementos com a classe na pagina

