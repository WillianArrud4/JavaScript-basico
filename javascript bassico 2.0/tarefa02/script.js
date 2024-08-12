
let inputNome = prompt('Digite seu nome')

let inputIdade = prompt('Digite a sua idade')

let idade = parent(inputIdade)

let maiorOuMenor 

if (idade >= 18) {
    maiorOuMenor = 'maior'
} else if (idade < 18) {
    maiorOuMenor = 'menor'
}

if (inputNome === 'Thomas Anderson' || inputNome === ' thomas anderson') {
mensagemPresonalizada = 'Você é personagem do filme The Matrix!'
}


let mensagem = `Olá ${inputNome}, voce é ${maiorOuMenor} de idade! ${mensagemPresonalizada}`

document.write(mensagem)