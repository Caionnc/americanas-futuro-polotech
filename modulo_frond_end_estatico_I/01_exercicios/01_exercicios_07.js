/* 7# - ExercÃ­cio
Crie uma calculadora de IMC que imprima a frase abaixo. Onde tem **___** substitua por variÃ¡veis.

  RETORNO ESPERADO:
  "
  **NOME** tem **IDADE** anos, pesa **KILOS** kg
  tem **ALTURA** de altura e seu IMC Ã© de **IMC**
  **NOME** nasceu em **ANO_NASCIMENTO**
  "
  OBS:
    1 - Crie variÃ¡veis(let/const) para nome, idade, peso, altura, imc e ano de nascimento
    2 - Para o resultado de altura utiliza em metros, exemplo: 1.63 | 1.85 | 1.76 e etc...
    3 - O cÃ¡lculo do IMC Ã© peso / (alturaEmMetros * alturaEmMetros)
*/


const nome = "Caio Nascimento";
const idade = Number(27);
const peso = Number(80);
const altura = Number(170);
const anoDeNascimento = Number(1995);



function calculaIMC() {
  let IMC = peso/Math.pow((altura/100),2);
  return IMC;
}

const IMC = calculaIMC()

console.log("Nome: " + nome + "\n" +
"Idade: " + idade + "\n" + 
"Peso: " + peso + "\n" +
"Altura: " + (altura/100).toFixed(2) + "\n" +
"IMC: " + IMC.toFixed(2) + "\n" +
"Nascido em: " + anoDeNascimento);
