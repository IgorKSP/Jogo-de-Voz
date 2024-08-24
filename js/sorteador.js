const menorValor = 1
const maiorValor = 100 
const numeroAleatorio = gerarNumeroAleatotio();

let elentoMenorValor = document.getElementById('menor-valor');
let elementoMaiorValor = document.getElementById('maior-valor');

function gerarNumeroAleatotio(){
    return parseInt(Math.random() * (maiorValor - menorValor + 1)) - menorValor;
}

elementoMaiorValor.innerHTML = maiorValor
elentoMenorValor.innerHTML = menorValor