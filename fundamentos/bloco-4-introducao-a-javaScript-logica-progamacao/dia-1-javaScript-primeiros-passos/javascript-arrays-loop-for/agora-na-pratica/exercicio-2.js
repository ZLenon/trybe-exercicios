//Para o segundo exercício, some todos os
//valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 0;

for (let soma = 0; soma < numbers.length; soma += 1) {
  resultado = resultado + numbers[soma];
}
console.log(resultado);

