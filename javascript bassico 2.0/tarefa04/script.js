
let inputTAbuada = prompt('Digite qual tabuada voce quer saber:')

let tabuada = parseInt(inputTAbuada)

for (let contador = 1; contador <= 10; contador++) {
    let resultado = tabuada * contador 

    let mensagem = `${tabuada} x ${contador} = ${resultado} <br>`

    document.write(mensagem)
}
