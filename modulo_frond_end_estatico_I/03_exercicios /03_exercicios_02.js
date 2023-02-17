/**
#2 Exercício
Dado o array abaixo, verifique qual é o maior número e exiba-lo
*/
//const array1 = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100]

const array = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100];

let maiorNumero = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > maiorNumero) {
    maiorNumero = array[i]
  }
}

console.log(maiorNumero);
