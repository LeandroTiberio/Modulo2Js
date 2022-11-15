console.log("Operadores Lógicos")

var caminhada = true
var corrida = true

if (caminhada === 5 && corrida === 2) 
{
    console.log('Passo o dia bem')
} 
else
{
    console.log('Não passo o dia bem')
}

var levantar = true
var cedo = true

if (levantar === cedo || levantar < 8)
{
    console.log('Saio tranquilo')
}

var terminarTrabalho = false
var terCompromisso = false

if (!terminarTrabalho === true || !terCompromisso === true)
{
    console.log('Saio tarde')
}