let clientes = [

    {
        nome: 'Willian',
        idade: 35,
        linguagen: ['javascript', 'python', 'php']

    },
    {
        nome: 'Fulano',
        idade: 22,
        linguagen: ['c#', 'c++', 'c']
    },
    {
        nome: 'Ciclano',
        idade: '33',
        linguagen: ['go', 'closure', 'r']
    }
]

let htmlClientes = ''

for (let cliente of clientes) {

    let listaLinguagens = ''

    for (let linguagen of cliente.linguagen) {
        listaLinguagens += `<li>${linguagen}</li>`
    }

    htmlClientes += `

      <li>
          <b>nome:</b> ${cliente.nome} <br>
          <b>Idade:</b> ${cliente.idade}
          <b>Linguagens</b><br>
           <ul>
              <li>javacripty</li>
              <li>python</li>
              <li>php</li>
           </ul>
        </li>

      `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes