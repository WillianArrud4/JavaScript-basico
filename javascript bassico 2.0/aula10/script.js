 let inputNota1 = ('digite a sua nota')
 let inputNota2 = ('digite a sua outra nota')        

 let nota1 = parseInt(inputNota1)
 let nota2 = parseInt(inputNota2)

 let notaMinima = 7

 let media = (nota1 + nota2) / 2

 if (media >= notaMinima) {
    document.write('ok, voce pasoou')
 } else if (media < notaMinima) {
    document.write('Ops vc passou')
 }

 document.write('<br>')

 if (media >= notaMinima && media === 10) {
    document.write('Nossa! voce passou')
 } else if (media >= notaMinima && media === 9 ) {
    document.write('VOce foi muito bem')
 }

 document.write('<br>')


 if (media <= notaMinima && media === 6) {
    Document.write('NOSSA VC FOI MUITO MAL')
 } else if (media <= notaMinima && media === 5) {
    document.write(' voce pode melhorar')
 }