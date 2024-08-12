
let diaSemana = new Date().getDay()

let diaDaSemana

switch (diaSemana) {
    case 0:
        diaDaSemana = 'Domingo'
        break;
    case 1:
        diaDaSemana = 'Segunda-feira'
        break;
    case 2:
        diaDaSemana = 'Tresa-feira'
        break;
    case 3:
        diaDaSemana = 'Quarta-feira'
        break;
    case 4:
        diaDaSemana = 'Quinta-feira'
        break;
    case 5:
        diaDaSemana = 'Sexta-feira'
        break;
    case 6:
        diaDaSemana = 'Sabado'
        break;
}

document.write(`O dia da semana é: ${diaDaSemana}`)