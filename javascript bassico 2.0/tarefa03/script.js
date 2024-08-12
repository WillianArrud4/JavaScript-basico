function entrar () {
let inputNome = prompt('Digite seu nome')
let inputIdade = prompt('Digite a sua idade')

if (inputNome === '' || inputIdade === '') {
    alert('preencha os campos corretamente!')
    return
}

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

let saudacao = `Ola ${inputNome}, voce é ${maiorOuMenor} de idade`

document.querySelector('#saudação').innerHTML = saudacao

document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
}