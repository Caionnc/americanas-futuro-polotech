/* 1# - ExercÃ­cio - DONE
Crie uma variÃ¡vel nome e substitua o texto abaixo com o valor da variÃ¡vel, 
faÃ§a a substituiÃ§Ã£o com pelo menos duas formas, com o operador + ou com template string (``)

console.log("NOME nasceu em 2000");
console.log("Em 2019 NOME comeÃ§ou a programar");
console.log("Em 2020 NOME ingressou na faculdade");
console.log("Em 2022 como programador, NOME conquistou seu primeiro emprego");
*/

let nome = "Caio";
let sobrenome = "Nascimento";

console.log("Exercicio 01 ->");
console.log(nome + " nasceu em 2000");
console.log(`Em 2019 ${nome + " " + sobrenome} começou a programar"`);
console.log("Em 2020" + nome + " " + sobrenome + " ingressou na faculdade");
console.log(
  "Em 2022 como programador, %s %s conquistou seu primeiro emprego",
  nome,
  sobrenome
);

console.log("----- Fim Exercicio 01 -----" + "\n\n");