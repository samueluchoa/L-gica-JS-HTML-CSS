// ! Agora um desafio. Hoje, o precoDaGasolina está R$2.90 e o precoDoAlcool
// ! R$2.40. Qual é o precoPorKilometro, tanto do álcool quanto da gasolina? Dica:
// ! dividindo o preço do litro pelo consumo, temos o preço por quilometro. Qual é
// ! o menor deles ?

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// !---
var precoDaGasolina = 2.9;
var precoDoAlcool = 2.4;
var tanque = 40;
var kmRodado = 200;
var precoPorKilometro = 0;
// !----
rl.question(
  "Você está usando qual combústivel ? (1) Gasolina (2) Álcool: ",
  (opcao) => {
    if (opcao == 1) {
      precoPorKilometro = (precoDaGasolina * tanque) / kmRodado;
      console.log(); // ? Pula linha
      console.log(
        "O preço da gasolina por kilometro rodado é " +
          precoPorKilometro +
          " R$/Km"
      );
      console.log(); // ? Pula linha
    } else {
      console.log(); // ? Pula linha
      precoPorKilometro = (precoDoAlcool * tanque) / kmRodado;
      console.log(
        "O preço do álcool por kilometro rodado é " +
          precoPorKilometro +
          " R$/Km"
      );
      console.log(); // ? Pula linha
    }

    rl.close();
  }
);
