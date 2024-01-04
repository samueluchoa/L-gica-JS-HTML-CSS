function BRL(valor) {
  var valor = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valor;
}
var numero = 1.8969;
var abc = 0.567;
console.log("Antes da formatação: " + numero);
console.log("Antes da formatação: " + abc);
// ! numero = new Intl.NumberFormat("pt-BR").format(numero);
//numero = numero.toLocaleString("pt-BR");
a = numero + abc;
console.log("SOMA = " + a);
a = numero - abc;
console.log("SUBTRAÇÃO = " + a);
a = numero * abc;
console.log("MULTIPLIÇÃO = " + a);
a = numero / abc;
console.log("DIVISÃO = " + a);
console.log("========================================");
console.log("========================================");
numero = BRL(numero);
abc = BRL(abc);
console.log("Após a formatação: " + numero);
console.log("Após da formatação: " + abc);
a = numero + abc;
console.log("SOMA " + a);
a = numero - abc;
console.log("SUBTRAÇÃO " + a);
a = numero * abc;
console.log("MULTIPLIÇÃO " + a);
a = numero / abc;
console.log("DIVISÃO " + a);
