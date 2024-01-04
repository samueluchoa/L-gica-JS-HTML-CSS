var i = 0;
var soma = 0;
var max = 100;
while(i <= max) {
    soma = soma + i;
    console.log(soma);
    i++;
}
console.log("Soma = " + soma);
console.log("Média = " + (soma/max).toFixed(2));