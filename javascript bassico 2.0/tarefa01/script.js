
let inputNome = prompt('Digite o seu nome')

let inputIdade = prompt('Digite a sua idade')

let idade = parent(inputIdade)

let maiorOuMenor 

if (idade >= 18) {
    maiorOuMenor = 'maior'
} else if (idade < 18) {
    maiorOuMenor = 'menor'
}

let mensagem = `Olá ${inputNome}, voce é ${maiorOuMenor} de idade!`

document.write(mensagem)