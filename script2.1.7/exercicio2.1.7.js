
function verificarSalarioPrompt() 
{
    var salarioCalcular = prompt("Informe o salário base para calculo de reajuste: ");
    return salarioCalcular;
}
verificarSalarioPrompt();

function reajuste(salarioCalcular) 
{

    function calcularReajuste(salarioCalcular, porcentagem) 
    {
        switch (porcentagem) 
        {
            case 5:
                return salarioCalcular = (porcentagem / 100 * salarioCalcular) + salarioCalcular  

            case 10:
                return salarioCalcular = (porcentagem / 100 * salarioCalcular) + salarioCalcular

            case 15:
                return salarioCalcular = (porcentagem / 100 * salarioCalcular) + salarioCalcular
        
            case 20:
                return salarioCalcular = (porcentagem / 100 * salarioCalcular) + salarioCalcular
    
        }
    }
    calcularReajuste(salarioCalcular,porcentagem)

    var salarioNovo = (salario > 3000) ? calcularReajuste(salario, 5) 
    : salarioNovo = (salario > 2000) && (salario <= 3000) ? calcularReajuste(salario, 10)
    : salarioNovo = (salario > 1500) && (salario <= 2000) ? calcularReajuste(salario, 15)
    : salarioNovo = (salario <= 1500) ? calcularReajuste(salario, 20) : salario
    
    return console.log(salarioNovo);

}
reajuste(salario)