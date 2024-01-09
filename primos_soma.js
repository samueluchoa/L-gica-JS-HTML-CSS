// ? verifica se um número é primo. 
var isPrime = function(numero) {
    // primo == 2 divisores
    var i = 1;
    var div = 0;
    while(i <= numero) {
        if(numero % i == 0) { 
            //console.log(numero);
            div++; // conta os divisores
        }
        i++;
    }
    if(div ==  2) {
        //console.log(numero + " é primo");
        return numero;
    }
    else{
        console.log(numero + " não é primo\nEsse número tem " + div + " divisores\n");
    }
};

// ! Somar todos os números primos até n(Limite), sendo n > 0
var somaPrime = function(limite) {
    var cont = 1;
    var soma = 0;

    while (cont <= limite) {
        var primo = isPrime(cont);

        if (primo) {
            soma = soma + primo;
            console.log(primo + " é primo\n");
        }
        cont++;
    }
    console.log("A soma dos números primos até " + limite + " é igual a " + soma);
};

var limite = 100; 
// chamando a função 
somaPrime(limite); // ! Devo somar até quanto ? 