/* #1 Exercício
Dado o array abaixo, imprima apenas os valores ímpares
*/
//const array = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100]

const array = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100]

let arrayDeImpares = [];

for(let i = 0; i< array.length; i++){
  if(array[i]%2 > 0){
    arrayDeImpares = [...arrayDeImpares,array[i]];
  }
}

console.log(arrayDeImpares);