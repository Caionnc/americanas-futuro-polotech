/* /**
/**
#4 Exercício
Dado o array abaixo, calcule o quadrado de cada número
*/
//const array = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100]
// Se fossemos utilizar um objeto por exemplo

const array = [15, 22, 25, 16, 17, 65, 32, 12, 78, 11, 23, 45, 9, 55, 100];

const arrayResultante = [];

for (let i = 0; i < array.length; i++) {
  arrayResultante[i] = array[i] * array[i];
}

console.log(arrayResultante);
