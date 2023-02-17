// Considere o array de objetos 'alunos' que contem as informacoes dos alunos de uma escola do ensino médio
// Esta no final do ano e os alunos ja fizeram todas as provas dos 4 bimestres do ano letivo e voce esta
// desenvolvendo a tela do sistema da escola onde os alunos irao acessar para saber em qual dos casos eles
// se encontram: passou direto, reprovado direto, recuperacao final
// de acordo com as regras abaixo, escreva o algorimo que calcule e separe corretamente cada aluno
// no respectivo array: alunosRecuperacaoFinal, alunosPassaramDireto, alunosReprovados.
// devera ser inserido um objeto com as informacoes do aluno como: nome, media, percentual.
// As regras sao as
// se tiver 80% ou mais de presenca e media maior ou igual a 7 -> passou direto
// se tiver menos de 80% de presenca e nota maior ou igual a 7 ou
// 80% ou mais de presenca e nota inferior a 7 -> prova de recuperacao final
// se tiver menos que 80% de presenca e nota menor que 7 -> reprovado direto
// a quantidade total de aulas dadas no ano e de 240 aulas

const alunosRecuperacaoFinal = [];
const alunosPassaramDireto = [];
const alunosReprovados = [];

const totalDeAulas = 240;

const alunos = [
  {
    nome: "Fábio",
    n1: 7,
    n2: 5,
    n3: 9,
    n4: 4,
    p: 120,
  },
  {
    nome: "Bruna",
    n1: 7,
    n2: 8,
    n3: 9,
    n4: 10,
    p: 200,
  },
  {
    nome: "Carla",
    n1: 2,
    n2: 5,
    n3: 8,
    n4: 10,
    p: 200,
  },
  {
    nome: "Keilla",
    n1: 7,
    n2: 6,
    n3: 8,
    n4: 10,
    p: 45,
  },
  {
    nome: "Marcos",
    n1: 5,
    n2: 7,
    n3: 4,
    n4: 8,
    p: 130,
  },
  {
    nome: "Ana",
    n1: 10,
    n2: 10,
    n3: 3,
    n4: 2,
    p: 221,
  },
  {
    nome: "Thiago",
    n1: 1,
    n2: 3,
    n3: 3,
    n4: 9,
    p: 240,
  },
  {
    nome: "Athos",
    n1: 1,
    n2: 4,
    n3: 4,
    n4: 5,
    p: 50,
  },
];

function verificaAlunos(alunos) {
  alunos.forEach((element) => {
    let statusFrequencia = verificaFrequencia(element.p);
    let statusNotas = verificaNotas(
      element.n1,
      element.n2,
      element.n3,
      element.n4
    );

    if (statusFrequencia && statusNotas) {
      alunosPassaramDireto.push(element);
    } else if (statusFrequencia && !statusNotas) {
      alunosRecuperacaoFinal.push(element);
    } else {
      alunosReprovados.push(element);
    }
    console.log("O aluno: " + element.nome);
    console.log("Frequencia: " + statusFrequencia);
    console.log("Notas: " + statusNotas);
  });
}

function verificaFrequencia(frequencia) {
  let statusFrequencia = (frequencia / totalDeAulas) * 100;

  if (statusFrequencia >= 80) {
    return true;
  } else {
    return false;
  }
}

function verificaNotas(n1, n2, n3, n4) {
  let media = n1 + n2 + n3 + n4 / 4;

  if (media >= 7) {
    return true;
  } else {
    return false;
  }
}

function resultadoFinal() {
  for (let i = 0; i < alunos.length; i++) {
    console.log("Lista de aprovados: " + alunosPassaramDireto[i]);
    console.log("Lista de recuperação: " + alunosRecuperacaoFinal[i]);
    console.log("Lista de reprovados: " + alunosReprovados[i]);
  }
}

verificaAlunos(alunos);
resultadoFinal();
