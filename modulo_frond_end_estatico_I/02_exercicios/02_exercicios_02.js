/* 2# - Exercício
  Vamos construir com if um sistema de sinal de transito
  - Crie uma variável chamada cor que receba uma das cores a seguir: "vermelho", "amarelo", "verde"
  - Gostaríamos que:
    - Caso a variável cor for vermelha imprima na tela "PARE"
    - Caso a variável cor for amarela imprima na tela "CUIDADO"
    - Caso a variável cor for verde imprima na tela "PROSSIGA"
    - Caso a variável cor receba alguma cor inválida, imprima "COR INVÀLIDA"
*/

const cor = ["Vermelho", "Amarelo", "Verde"];

const sinal = cor[0];

if (sinal === "Vermelho") console.log("PARE");
else if (sinal === "Amarelo") console.log("CUIDADO");
else if (sinal === "Verde") console.log("PROSSIGA");
else if (sinal != "Vermelho" || sinal != "Amarelo" || sinal != "Verde")
  console.log("COR INVÁLIDA");
