// ! Agora um desafio. Hoje, o precoDaGasolina está R$2.90 e o precoDoAlcool
// ! R$2.40. Qual é o precoPorKilometro, tanto do álcool quanto da gasolina? Dica:
// ! dividindo o preço do litro pelo consumo, temos o preço por quilometro. Qual é
// ! o menor deles ?

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// !--- Função que pula linha. Criei para usar no console - Tela Preta.
function pulaLinha() {
  console.log("\n");
}
// !-------
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
      pulaLinha();
      precoPorKilometro = (precoDaGasolina * tanque) / kmRodado;
      console.log(
        "O preço da gasolina por kilometro rodado é " +
          precoPorKilometro +
          " R$/Km"
      );
    } else {
      precoPorKilometro = (precoDoAlcool * tanque) / kmRodado;
      console.log(
        "O preço do álcool por kilometro rodado é " +
          precoPorKilometro +
          " R$/Km"
      ); 
    }
    pulaLinha();
    rl.close();
  }
);