// Imagine que voce trabalhe em uma empresa de food delivery e esteja atuando na tela de concatar a operacao.
// Esta tela e acessada pelo usuario quando ele tem algum problema com o pedido. Quando o usuario acessa essa
//tela, nos enviamos pro nosso backend alguns informacoes sobre o usuario e pedido.

// 1 - Caso o valor total do pedido seja maior que 150 reais, devemos  adicionar uma nova tag no array de tags. A
// tag que deve ser adicionada e a seguinte: 'order-bigger-than-150', caso contrario, devera ser adicionado a tag
// 'order-less-or-equal-than-150'

// Insercao e remocao em listas

//array de tags
const tags = ["order"];
const initialValue = 0;
const itemsValue = [10, 56.8, 32.2, 12];

const totalSum = itemsValue.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(totalSum);

if (totalSum > 150) {
  tags.push("order-bigger-than-150");
} else {
  tags.push("order-less-than-150");
}

console.log(
  "Resolução questão 01: O pedido recebe a tag " +
    tags +
    " Pois o valor do pedido total é = " +
    totalSum
);

//2 - Imagine que estejamos criando uma tela para cadastro de usuários para um sistema. Imagine que nesse sistema, podemos fazer o
// cadastro de usuários em lote, ou seja, a partir de uma tela, podemos cadastrar diversos usuários. Crie um algoritmo com uma funcao
// que, adicione um novo usuario a uma lista de usuarios e faca a insercao de 5 novos usuarios. Cada usuário deve ter as seguintes
// informacoes: (nome, sobrenome, email, idade, é administrador?) - FEITO

// 3 - Melhore o algoritmo da questao 3 fazendo a validacao dos tipos de campos, por exemplo: o campo nome deve ser uma string, e assim
// // por diante.

const user = {
  nome: " ",
  sobrenome: " ",
  email: " ",
  idade: 0,
  permission: " ",
  id: " ",
};

const userList = [];

//Dados em lote

usersData = [
  {
    nome: "Vasco ",
    sobrenome: "Da Gama ",
    email: " vasco@gmail.com",
    idade: 124,
    permission: " member",
    id: 1,
  },
  {
    nome: "Fluminense ",
    sobrenome: "Football Club ",
    email: " flu@gmail.com",
    idade: 120,
    permission: " member",
    id: 2,
  },
  {
    nome: "Caio",
    sobrenome: "Clube de Regatas",
    email: " fla@gmail.com",
    idade: 127,
    permission: " member",
    id: 3,
  },
];

//Inserting users into userList

for (let i = 0; i < usersData.length; i++) {
  try {
    const newUser = Object.create(user);
    newUser.nome = parseInt(usersData[i].nome);
    newUser.sobrenome = usersData[i].sobrenome;
    newUser.email = usersData[i].email;
    newUser.idade = usersData[i].idade;
    newUser.permission = usersData[i].permission;

    addUserFunction(newUser);
  } catch (e) {
    throw TypeError("Erro de tipagem");
  }
}
function addUserFunction(newUser) {
  userList.push(newUser);
}

function createIdFunction() {
  return "";
}

var menu = 0;

while (menu !== "4") {
  menu = prompt(
    "Sistema de Cadastro Simples: Selecione no Menu a ação desejada\n" +
      "[1] Cadastrar usuário\n" +
      "[2] Consultar lista de usuários\n" +
      "[3] Editar usuário(em construção)\n" +
      "[4] Sair do sistema"
  );

  switch (menu) {
    case "1": {
      let newNome = prompt("Digite seu nome: ");
      let newSobrenome = prompt("Digite seu sobrenome: ");
      let newEmail = prompt("Digite seu email: ");
      let newIdade = prompt("Digite sua idade: ");
      let newPermission = prompt("Digite a permissão do usuário: ");

      const newUser = Object.create(user);
      newUser.nome = newNome;
      newUser.sobrenome = newSobrenome;
      newUser.email = newEmail;
      newUser.idade = newIdade;
      newUser.permission = newPermission;

      // const newUser = Object.create(user, {
      //   user: {
      //     nome: newNome,
      //     sobrenome: newSobrenome,
      //     email: newEmail,
      //     idade: newIdade,
      //     permission: newPermission,
      //   },
      // });

      // Object.defineProperties(user, {
      //   newUser: {
      //     nome: newNome,
      //     sobrenome: newSobrenome,
      //     email: newEmail,
      //     idade: newIdade,
      //     permission: newPermission,
      //   },
      // });

      addUserFunction(newUser);

      console.log("Usuário cadastrado com sucesso!");
      break;
    }
    case "2":
      userList.forEach((item) => console.log(item));
      console.log("Lista de usuários!");
      break;
    case "3":
      console.log("Editar usuário");
      break;
    case "4":
      console.log("Logoff");
      break;
    default:
      console.log("Ocorreu um erro, tente novamente mais tarde.");
      break;
  }
}
