/* 3# - ExercÃ­cio
  const numeros = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14]

  Dado o array acima:
  - Retorne a posiÃ§Ã£o do primeiro nÃºmero 2
  - Crie uma varÃ¡vel que verifique se existe o nÃºmero 14. Retorne true ou false
  - Insira o numero 34 na ultima posiÃ§Ã£o do array.
  - Insira o nÃºmero 90 na primeira posiÃ§Ã£o do array.
  - Retorne em uma variÃ¡vel o tamanho do array acima.
*/

console.log("Exercicio 03 ->\n");

const numeros = [1, 2, 3, 1, 2, 4, 5, 5, 4, 10, 12, 10, 1, 13, 12, 14];

const verificaNumero = numeros.includes(14);
numeros.push(34);
numeros.unshift(90);
console.log("É " + verificaNumero + " que o array NUMEROS possui o valor 14");
console.log(
  "O valor na última posição do array NUMEROS é o" + numeros[numeros.length - 1]
);
console.log(
  "Inserir o valor 90 na primeira posição do array NUMEROS, o mesmo retorna o seguinte:" +
    numeros +
    " sendo o valor 90 na posição " +
    numeros.indexOf(90)
);
console.log("Tamanho do array NUMEROS no final " + numeros.length + "\n");

console.log("----- Fim Exercicio 03 -----" + "\n\n");
