// Questao 1 - Uso do for in, for of
// Imagine que estamos trabalhando em uma tarefa em que precisamos enviar a lista de usuários logados no sistema para o nosso backend
// Nos ja temos uma funcao nativa no sistema que nos retorna a lista de usuarios logados, a funcao se chama getLoggedUsers.
// Usando o for in e for of, crie uma funcao que salve somente o valor de email dos usuarios em um novo array

const getLoggedUsers = () => {
  return [
    {
      name: "Gabriel",
      email: "gabriel@gmail.com",
    },
    {
      name: "Joao",
      email: "joao@gmail.com",
    },
  ];
};

function getLoggedUsersEmails(users) {
  const emailList = [];

  for (const loggedUser of users) {
    for (let prop in loggedUser) {
      if (prop === "email") {
        emailList.push(loggedUser[prop]);
      }
    }
  }
  return emailList;
}

console.log(getLoggedUsersEmails(getLoggedUsers()));
