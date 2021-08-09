let notas = [10, 10, 5, 4] //Declaração das notas dos bimestres!
let soma = 0 //Declaração da variável "soma" recebendo o valor 0

//Estrutura do For para somar as notas e imprimir uma a uma!
for (var i = 0; i < notas.length; i++) {
  soma += notas[i]
  console.log(
    'Parabéns pela conclusão do ' +
      (i + 1) +
      'º Bimestre! Sua nota foi: ' +
      soma
  )
}

// Cálculo da média com base no resultado final da soma total
let media = soma / notas.length
console.log('Sua média geral foi de: ' + media)

//Estrutura de If para identificar se o aluno foi aprovado ou reprovado!
if (media >= 7) {
  console.log('Parabéns! Você foi Aprovado!')
} else {
  console.log('Que pena! Você foi reprovado!')
}
