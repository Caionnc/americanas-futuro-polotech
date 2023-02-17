/* 1# - Exercício
  const array = [
    [1, 5, 7, 9],
    [2, 6, 8, 10]
  ]

- Calcule a média dos números do array da primeira posição (Índice 0)
- Calcule a média dos números do array da segunda posição (Índice 1)
- Some todos os números dos arrays dos índices 1 e 2 e também forneça a média do array em relação a quantidade 
de todos os números do array
- Multiplique os valores de cada index e coloque-os em variáveis representando cada index,
  exemplo const index0, const index1 e etc...
*/

const array = [
  [1, 5, 7, 9],
  [2, 6, 8, 10],
];

//a) Calcule a média dos números do array da primeira posição (Índice 0)

let mediaIndex0 = 0;

for (let i = 0; i < array[0].length; i++) {
  mediaIndex0 = mediaIndex0 + array[0][i];
}

mediaIndex0 = mediaIndex0 / array[0].length;
console.log("Media da primeira linha do Array: " + mediaIndex0);

//b) Calcule a média dos números do array da segunda posição (Índice 1)

let mediaIndex1 = 0;

for (let i = 0; i < array[1].length; i++) {
  mediaIndex1 = mediaIndex1 + array[1][i];
}

mediaIndex1 = mediaIndex1 / array[1].length;
console.log("Media da segunda linha do Array: " + mediaIndex1);

/* c) - Some todos os números dos arrays dos índices 1 e 2 e também forneça a média do array em relação a quantidade  */

let mediaArrayTotal = 0;
let auxSomatorio = 0;
let auxSomatorioIndex = 0;

for (let i = 0; i < array[0].length; i++) {
  for (let j = 0; j < array[1].length; j++) {
    if (auxSomatorioIndex >= array[1].length) {
      continue;
    } else {
      auxSomatorio = auxSomatorio + array[1][j];
      auxSomatorioIndex++;
    }
  }
  auxSomatorio = auxSomatorio + array[0][i];
}

mediaArrayTotal = auxSomatorio / (array[0].length + array[1].length);
console.log(
  "Somatorio dos itens do array total: " +
    auxSomatorio +
    " E a sua média: " +
    mediaArrayTotal
);

/* d) Multiplique os valores de cada index e coloque-os em variáveis representando cada index,
  exemplo const index0, const index1 e etc...
  
  NÃO COMPREENDI*/
