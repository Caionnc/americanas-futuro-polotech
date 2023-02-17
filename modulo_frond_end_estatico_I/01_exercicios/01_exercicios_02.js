
/* 2# - ExercÃ­cio
  const numero = "32.45678"

  Referenciando a variÃ¡vel acima:
    - Retorne em uma nova variÃ¡vel o valor 32.45678 como um tipo de dado number (Utilize o typeof para verificar)
    - Retorne em uma nova variÃ¡vel o resultado 32 como um tipo de dado number (Utilize o typeof para verificar)
    - Retorne em uma nova variÃ¡vel o resultado 32.46 (Pegadinha!!)
*/
console.log("Exercicio 02 ->");

const numero = Number("32.45678");
const numeroInteiro = parseInt(numero);
const numeroFormatado = numero.toFixed(2);
console.log("O numero " + numero + " é " + typeof numero);
console.log("Transformando o numero para inteiro fica: " + numeroInteiro);
console.log(
  "E formatando o mesmo para o retorno com duas casas decimais: " +
    numeroFormatado
);

console.log("----- Fim Exercicio 02 -----" + "\n\n");