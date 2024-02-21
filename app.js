// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'jogo do número secreto';

// let paragrafo = document.querySelector('p');
 //paragrafo.innerHTML = 'Escolha um número entre 1 a 10';

function exibireTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibireTextoNaTela('h1, Jogo do número secreto');
exibireTextoNaTela('p, Escolha o número entre 1 a 10');

function verificarChute('h1') {
    console.log ('O botão foi clicado!');
}