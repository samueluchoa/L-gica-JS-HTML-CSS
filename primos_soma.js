const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var mostra = function (frase) {
  console.log(frase);
};

// ? verifica se um número é primo.
var isPrime = function (numero) {
  // * primo == 2 divisores
  var i = 1;
  var div = 0;
  while (i <= numero) {
    if (numero % i == 0) {
      div++; // conta os divisores
    }
    i++;
  }
  
  if (div == 2) {
    return numero;
  } else {
    //mostra(numero + " não é primo\nEsse número tem " + div + " divisores\n");
    return 0;
  }
};
// ? Somar todos os números primos até n(Limite), sendo n > 0
var somaPrime = function (limite) {
  var cont = 1;
  var soma = 0;

  while (cont <= limite) {
    var primo = isPrime(cont);

    if (primo) {
      soma = soma + primo;
      // mostra(primo + " é primo\n");
    }
    cont++;
  }
  mostra(
    "A soma dos números primos até " + limite + " é igual a " + soma + "\n\n"
  );
};
// ! Interagindo com o usuário
rl.question(
    // ? (1), (2), (3), (4) Fazem parte da mesmas string, apenas fiz concatenação
    "=====================================================\n" + // ? (1)
    "Somente números MAIORES QUE ZERO serão considerados !\n" + // ? (2)
    "=====================================================\n" + // ? (3)
    "# Digite um limite para somar todos os número até esse limite >>  ", // ? (4)
  (limite) => {
    if (limite >= 0) {
      somaPrime(limite); // TODO chamando a função
    } else {
      mostra("Insira um número positivo maior que zero ! \n Tente Novamente !");
    }
    rl.close();
  }
);