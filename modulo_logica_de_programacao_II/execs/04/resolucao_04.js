//  Crie um jogo de adivinhacao
//  O jogo devera gerar um numero aleatorio de 1 a 10 e salva-lo em uma variavel
//  O jogo devera mostrar um prompt (caixa com um input para o usuario inserir um valor) e salvar o valor inserido pelo usuario
//  A cada input do usuario, o jogo devera verificar se este acertou ou nao o valor inserido,
//  caso tenha acertado, devera mostrar um alerta pro usuario uma mensagem indicando que este acertou e o numero de tentativas
//  efetuadas. Caso o usuario tenha errado, devera mostrar um alerta com a mensagem de erro e a quantidade de tentativas e logo em
//  seguida outro prompt para que o usuario insira outro palpite
//  o jogo acaba se o usuario clicar no botao cancelar do prompt ou se o usuario acertar o numero gerado

const numeroDaSorte = parseInt(Math.random() * 10);
let qtdeTentativas = 0;

var menu = false;

function main() {
  while (menu === false) {
    let chute = prompt("Insira o número da sorte");
    if (chute === null) {
      menu = true;
    }
    switch (chute) {
      case numeroDaSorte.toString(): {
        menu = true;
        alert("Parabéns, você acertou o número da sorte!");
        console.log("Parabéns acertou o número");
        break;
      }
      case null: {
        console.log("Cancel Button pressionado");
        break;
      }
      default: {
        console.log("errou, tente novamente");
        qtdeTentativas++;
        alert(
          "Errou e você está na Tentativa de nº: " +
            qtdeTentativas +
            "\n Tente novamente!"
        );
        break;
      }
    }
  }
  return;
}
