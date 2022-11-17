/*console.log("Escopo");
console.log("");

function confirmarDados(nome) {
    var nomeCompleto = nome + " da silva ";

    function getAnoNascimento() {
        var idade = 20;
        var ano = 2022 - idade;
        return {
            idade, ano;
        }
    }
    console.log("Nome Completo :", nomeCompleto);
    console.log("Ano de Nascimento :", getAnoNascimento().ano);
    console.log("Idade :", getAnoNascimento().idade);
}
confirmarDados("Marcos");
console.log("");*/

/*console.log("Var / let / const");
console.log('');

function confirmarDados(nome) {
    var nomeCompleto = nome + " da silva ";
    var geracao = "millenium";

    function getAnoNascimento() {
        var idade = 40;
        var ano = 2022 - idade;
        return {
            idade, ano
        }
    }

    var anoDeNascimento = getAnoNascimento().ano;

    if (anoDeNascimento <= 1995) {
        geracao = "Geração X"
    }

    console.log("Nome Completo :", nomeCompleto);
    console.log("Ano de Nascimento :", getAnoNascimento().ano);
    console.log("Idade :", getAnoNascimento().idade);
    console.log("Geração :" , geracao)
}
confirmarDados("Marcos");
console.log("");*/

/*console.log("Try..Catch");
console.log("");

function confirmarDados(nome) {
    var nomeCompleto = nome + " da silva ";

    function getAnoNascimento() {
        var idade = 20;
        var ano = 2022 - idade;
        return {
            idade, ano
        }
    }
    console.log("Nome Completo :", nomeCompleto);
    console.log("Ano de Nascimento :", getAnoNascimento().ano);
    console.log("Idade :", getAnoNascimento().idade);
}

try {
    confirmarDados("Marcos")
} catch (error) {
    new Error (console.log("Erro em campos de digitação confira informações digitadas"));
}*/

console.log("Funções");
console.log("");

function confirmarDados(nome) {
    var nomeCompleto = nome + " da silva ";
    var geracao = "millenium";

    function getAnoNascimento() {
        var idade = 20;
        var ano = 2022 - idade;
        return {
            idade, ano
        }
    }

    var geracao = geracaoPertence (getAnoNascimento().ano);

    function geracaoPertence(ano) {
        if (ano <= 1995) {
            geracao = "Geração X";
            return geracao;
        }
        return geracao
    }
  

    console.log("Nome Completo :", nomeCompleto);
    console.log("Ano de Nascimento :", getAnoNascimento().ano);
    console.log("Idade :", getAnoNascimento().idade);
    console.log("Geração :" , geracao)
}
confirmarDados("Marcos");
console.log("");

