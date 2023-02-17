/* 3# - Exercício
  Monte um programa que realiza a verificação de uma entrada de um ônibus
  Monte um fluxo sistêmico que verifique os seguintes requisitos.
    - Pessoas abaixo de 6 anos não são permitidas.
    - Crianças entre 7 a 10 anos só podem entrar acompanhada dos pais
    - Adolescentes de 11 a 17 anos pagam se estiverem sem "carteirinha" e não pagam com "carteirinha"
    - Pessoas acima de 65 anos não pagam
    - Pessoas acima de 18 anos pagam normalmente.

    Saídas esperadas do sistema
      - "ENTRADA PERMITIDA",
      - "ENTRADA PERMITIDA, SEM CUSTO",
      - "ENTRADA NÃO PERMITIDA"
    
    Inicie seu sistema com as seguintes variáveis
    const idade = valor do tipo number
    const carteirinha = valor do tipo boolean
    const acompanhadoPais = valor do tipo boolean
*/
// Se fossemos utilizar um objeto por exemplo

const idadeDaPessoa = Number(66);
const carteirinha = true;
const acompanhadoPais = false;

if (idadeDaPessoa <= 6) {
  console.log("ENTRADA NÃO PERMITIDA");
} else if (idadeDaPessoa > 6 && idadeDaPessoa <= 10) {
  if (acompanhadoPais) {
    console.log("ENTRADA PERMITIDA, POIS A CRIANÇA ESTÁ ACOMPANHADA DOS PAIS");
  } else if (!acompanhadoPais) {
    console.log(
      "ENTRADA NÃO PERMITIDA, POIS A CRIANÇA NÃO ESTÁ ACOMPANHADA DOS PAIS."
    );
  }
} else if (idadeDaPessoa > 10 && idadeDaPessoa <= 17) {
  if (carteirinha) {
    console.log("ENTRADA PERMITIDA SEM PAGAMENTO, POR POSSUIR CARTERINHA");
  } else if (!carteirinha) {
    console.log(
      "ENTRADA PERMITIDA SOB PAGAMENTO, POR NÃO POSSUIR A CARTERINHA"
    );
  }
} else if (idadeDaPessoa > 17 && idadeDaPessoa <= 65) {
  console.log("ENTRADA PERMITIDA MEDIANTE PAGAMENTO NORMAL");
} else if (idadeDaPessoa > 65) {
  console.log("ENTRADA GRATUITA PERMITIDA VIA IDADE ACIMA DE 65");
}
