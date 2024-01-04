function pula_linha() {
  document.write("<br><br>");
}

function mostra(frase) {
  document.write(frase);
}

function BRL(valor) {
  valor = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return valor;
}
