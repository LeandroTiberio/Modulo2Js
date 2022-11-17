console.log("Aumento salarial");
console.log("");

function consultaSalario() {

    var valor = parseInt(prompt("Informe seu salário para calculo de reajuste: "));
    return valor;
}
consultaSalario();


function reajuste(salario) {

    function calcularReajuste(salarioCalcular, porcentagem) {
        switch (porcentagem) {
            case 5:
                return salarioCalcular = (salarioCalcular / 100 * porcentagem) + salarioCalcular  

            case 10:
                return salarioCalcular = (salarioCalcular / 100 * porcentagem) + salarioCalcular

            case 15:
                return salarioCalcular = (salarioCalcular / 100 * porcentagem) + salarioCalcular
        
            case 20:
                return salarioCalcular = (porcentagem / 100 * salarioCalcular) + salarioCalcular
    
        }
    }

    var salarioNovo = (salario > 3000) ? calcularReajuste(salario, 5) 
    : salarioNovo = (salario > 2000) && (salario <= 3000) ? calcularReajuste(salario, 10)
    : salarioNovo = (salario > 1500) && (salario <= 2000) ? calcularReajuste(salario, 15)
    : salarioNovo = (salario <= 1500) ? calcularReajuste(salario, 20) : salario
    
    return console.log(salarioNovo);

}
reajuste(salario);
