// Questao 2 - Uso de funcoes callbacks
// Imagine que voce esteja executando uma tarefa onde voce devera mostra um "modal" para o usuario com um titulo, e dois botoes
// um de confirmar e outro de cancelar. Porem, voce sabe que essa funcao podera ser usada em diversos cenarios e diversas vezes 
// no futuro, entao voce com um otimo desenvolvedor, resolveu criar essa funcao com o seguinte padrao 
// modal(tituloModal, callbackBtnConfirmar, callbackBtnCancelar). Dessa forma, quando essa funcao for usada, o desenvolvedor 
// tera a liberdade de mudar nao so o titulo do modal, como tambem o comportamento que ira ser disparado quando o usuario 
// clicar no botao aceitar ou rejeitar. Desenvolva essa funcao. Dica, uso o confirm para mostrar o "modal".

users.forEach((item) => {});
// callback functions
function itareteArrayObject(arrayObject, callback) {
  for (const user of arrayObject) {
    for (const key in user) {
      callback(key, user[key]);
    }
  }
}

const c = (key) => console.log(key);