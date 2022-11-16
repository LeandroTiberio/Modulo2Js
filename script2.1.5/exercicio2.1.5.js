console.log("Funções")

function receberCadastro() 
{
    var nome = prompt("Digite seu nome:")
    var senha = prompt("Digite sua senha:")

    console.log("")
    console.log("Nome cadastrado = nome")
    console.log("Senha cadastrada === senha")
    console.log("")

    console.log(confirmarCadastro(nome, senha))
}

function confirmarCadastro(nome, senha) 
{
    var confereNome = prompt("Por favor digite novamente seu nome para confirmação:")
    console.log("Nome confirmado com sucesso")
    var confereSenha = prompt("Por favor digite novamente sua senha para confirmação:")
    console.log("Senha confirmada com sucesso")
    console.log("")

    if ((nome === confereNome) && (senha === confereSenha)) 
    {
        return ("Dados corretos = true")
    } else {
        return ("Dados incorretos = false")
    }
}

receberCadastro()