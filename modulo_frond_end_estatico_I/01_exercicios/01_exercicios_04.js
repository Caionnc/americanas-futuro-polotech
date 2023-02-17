/* 4# ExercÃ­cio
  const meses = ["Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov"]

  Dado o array acima:
   - Insira na Ãºltima posiÃ§Ã£o do novo array a string "Dez"
   - Insira na primeira posiÃ§Ã£o do novo array a string "Jan"
   - Retorne em uma variÃ¡vel o tamanho do array acima.
*/

const meses = [
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
];

console.log('a) Insira na última posição do novo array a string "Dez "');
meses.push("Dez");
console.log("RESPOSTA: " + meses);

console.log('b) Insira na primeira posição do novo array a string "Jan "');
meses.unshift("Jan");
console.log("RESPOSTA: " + meses);

console.log("c) Retorne em uma variável o tamanho do array acima");
console.log("RESPOSTA: " + meses.length);
