console.log("Estrutura de Repetição")

console.log("Somar números da lista")

var lista = [12, 6, 9, 42, 11, 102, 44, 15]

var resultadoSomaListaFor = 0 
var resultadoSomaListaWhile = 0
var resultadoSomaListaDoWhile = 0
var contadorWhile = 0
var contadorDoWhile = 0

console.log("Lista com for")

for (var i = 0; i < lista.length; i++) 
{
    resultadoSomaListaFor = resultadoSomaListaFor + lista[i];
}

console.log("Lista com While")

while (contadorWhile < lista.length) 
{
    resultadoSomaListaWhile = resultadoSomaListaWhile + lista[contadorWhile]
    contadorWhile++
}

console.log("Lista com do/while")

do 
{
    resultadoSomaListaDoWhile = resultadoSomaListaDoWhile + lista[contadorDoWhile]
    contadorDoWhile++
} while (contadorDoWhile < lista.length);

console.log("Soma da lista usando comando For: " + resultadoSomaListaFor)
console.log("Soma da lista usando comando While: " + resultadoSomaListaWhile)
console.log("Soma da lista usando comando Do While: " + resultadoSomaListaDoWhile)


console.log("Parar quando encontrar o primeiro número primo")

var numInicial = 6
var numFinal = 102

while (numInicial < numFinal) 
{
    num % 2 === 0 && num % 3 === 0 && num % 5 === 0 ? console.log('O número não é primo') : console.log('O número é primo')

    console.log(numInicial)
    numInicial++
}



console.log("Números menores de 40 e maiores de 50")

array = 60

for (let i = 0; i < array; i++) 
{
    if (i >= 40 && i <= 50) 
    {
        continue
    }
    console.log(i)
}
