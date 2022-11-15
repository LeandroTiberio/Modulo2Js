console.log("Escopo")
console.log('')

function confirmarDados(nome) {
    var nomeCompleto = nome + ' da silva '

    function getAnoNascimento() {
        var idade = 20
        var ano = 2022 - idade
        return {
            idade, ano
        }
    }

    console.log(`${nomeCompleto}, ${getAnoNascimento().ano}, ${getAnoNascimento().idade}`)
}

confirmarDados('Marcos')

console.log('')

console.log("Var / let / const")
console.log('')

function confirmarDados(nome) {
    var nomeCompleto = nome + ' da silva'
    var geracao = 'millenium'

    function getAnoNascimento() {
        var idade = 40
        var ano = 2022 - idade
        return {
            idade, ano
        }
    }

    var anoDeNascimento = getAnoNascimento().ano;

    if (anoDeNascimento <= 1995) {
        geracao = 'Geração X'
    }

    console.log(`${nomeCompleto}, ${getAnoNascimento().ano}, ${geracao}`)
}

confirmarDados('Marcos')
console.log('')