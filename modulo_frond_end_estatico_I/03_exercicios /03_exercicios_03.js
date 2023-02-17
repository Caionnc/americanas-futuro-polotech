/* /**
#3 Exercício
Dado o array abaixo, calcule a média dos valores de um array
*/
//const array2 = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100];

/**
 */
// Se fossemos utilizar um objeto por exemplo

const array = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100];
let auxSomatorioArray = Number(0);

for (let i = 0; i < array.length; i++) {
  auxSomatorioArray = auxSomatorioArray + array[i];
}

const mediaArray = auxSomatorioArray / array.length;
console.log(mediaArray);

