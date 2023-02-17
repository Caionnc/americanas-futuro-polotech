/* 5# - ExercÃ­cio
Declare uma const meuAnodeNascimento que recebe o ano de seu nascimento Ex: 2001 OK
Declare uma const anoAtual que recebe o ano atual Ex: 2022 OK 
Exiba as constantes meuAnodeNascimento e anoAtual uma ao lado da outra no console.log() OK
Declare uma variÃ¡vel chamada minhaIdade que recebe anoAtual subtraÃ­do a meuAnodeNascimento. Imprima o valor no console. (NÃ£o digite o valore da varÃ­avel minhaIdade de forma manual)
Declare uma variÃ¡vel chamada numeroCinco, que recebe 5 e:
      Descomente o console.log abaixo na terceira linha, Os nÃºmeros nÃ£o devem ser digitados manualmente;
      1) Substitua a palavra "valor1" pelo anoAtual somado Ã  5;
      2) Substitua a palavra "valor2" pela minhaIdade somada Ã  5;
      3)console.log(`Em ${valor1}, estarei com ${valor2} anos.`)


OBS:
Para fazer conta no javascript utilize os seguintes exemplos
  
  const soma = 2 + 2
  console.log(soma) // 4

  const subtracao = 4 - 2
  console.log(subtracao) // 2

  const multiplicacao = 3 * 3
  console.log(multiplicacao) // 9

  const divisao = 10 / 2
  console.log(divisao) // 5

  *** SerÃ¡ passado aritimÃ©tica na prÃ³xima aula
*/

const meuAnodeNascimento = Number(1995);
const anoAtual = Number(2022);

console.log(
  "Meu ano de nascimento: " + meuAnodeNascimento + " e o ano atual " + anoAtual
);

const minhaIdade = Number(anoAtual - meuAnodeNascimento);
console.log("Minha idade é: " + minhaIdade);

/* Declare uma variável chamada numeroCinco, que recebe 5 e:
      Descomente o console.log abaixo na terceira linha, Os nÃºmeros nÃ£o devem ser digitados manualmente;
      1) Substitua a palavra "valor1" pelo anoAtual somado Ã  5;
      2) Substitua a palavra "valor2" pela minhaIdade somada Ã  5;
      3)console.log(`Em ${valor1}, estarei com ${valor2} anos.`)
*/ 

const valor1 = anoAtual + 5
const valor2 = minhaIdade + 5

console.log(`Em ${valor1}, estarei com ${valor2} anos.`)
