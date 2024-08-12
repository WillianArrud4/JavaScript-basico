
let opcoes

for (let contador = 2021; contador >= 1999; contador --) {
    opcoes += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opcoes

let lista = ''

let clientes = ['willian', 'lucas', 'pedro', 'marcio']
 
for (let contador = 0; contador <= clientes.length - 1; conatador++) {
    lista += `<li>${clientes[contador]} - ${contador}</li>`
} 

document.querySelector('#listaCLientes').innerHTML = lista
