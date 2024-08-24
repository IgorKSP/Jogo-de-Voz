function verificarOChute(chute){
    const numero = +chute;

    if (chuteInvalido(numero)) {
            if (chute.toUpperCase() === "GAME OVER") {
    
                document.body.innerHTML =
                    `
                    <h2>Game Over!!!</h2>
                    <h3>Pressione o botão para jogar novamente</h3>
                    <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                    `
                    document.body.style.backgroundColor = "black";
            } else {
    
                elementoChute.innerHTML += '<div>Valor Inválido</div>';
            }
    }

    if (numeroMaiorOuMenorDoPermitido(numero)) {
        elementoChute.innerHTML += `
        <div> valor inválido. O numero precisa estar entre ${menorValor} e ${maiorValor}. </div>
        `;
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML += `
        <h2> Você acertou!</h2>
        <h3> O número secreto era ${numeroAleatorio} </h3>

        <button id="Jogar-novo" class="btn-jogar">Jogar Novamente</button> 
        `
    } else if(numero > numeroAleatorio){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorDoPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'Jogar-novo') {
        window.location.reload();
    }
});