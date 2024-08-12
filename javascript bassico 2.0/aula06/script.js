/*

String
number
boolean
array
object
undefined
null  

*/

// tipo String
let nome = 'Willian'
console.log(nome)

// String - concatenada
let sobrenome = 'Arruda'
// console.log(nome+' '+sobrenome)

// String literal
console.log(`${nome} ${sobrenome}`)

// number
let idade = 18
console.log(idade)
console.log(idade + 18)

// number - float
let porcentagem = 10.2
console.log(porcentagem + '%')

// boolean (true ou false)
let maiorDeIdade = true
console.log(maiorDeIdade)

let menorDeIdade = false
console.log(menorDeIdade)

// array
let habilidade = ['html', 'css', 'javascript']
console.log(habilidade)
console.log(habilidade.length)
console.log(habilidade[2])

// object  
let pessoa = {
    nome: 'Willian',
    sobrenome: 'Arruda',
    idade: 18,
    habilidade: ['css', 'html', 'javaScript'] 
}
console.log(pessoa)
console.log(pessoa.habilidade[2])

// undefind
let endereco
console.log(endereco)

// null
let cidade = null
console.log(cidade)