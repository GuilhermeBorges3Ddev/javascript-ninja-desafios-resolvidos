(function (win) {
  "use strict";

  /**
   * Vamos forçar um erro... pegando o exemplo3.js e parseando um XML como se estivéssemos parseando um JSON obteremos o erro.
   * Para dispararmos erros nos console podemos usar o seguinte objeto: "throw new Error(<Mensagem>)".
   * Outra maneira de se disparar um erro, é por exemplo expecificando um erro de sintaxe: "throw new SynthaxError(<Mensagem>)".
   * O bloco try/catch funciona como um "if", se um erro for econtrado no try pula-se para a execução interna do catch.
  */

  var ajax = new win.XMLHttpRequest();
  ajax.open("GET", "./data/data.xml");
  ajax.send();

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  console.log("Carregando...");

  var response = '';

  ajax.addEventListener(
    "readystatechange",
    function () {
      if (isRequestOk()) {
        try {
          response = JSON.parse(ajax.responseText);
          //throw new Error('Mensagem com erro genérico');
          //throw new SyntaxError("Erro de escrita na linha X") -- O lançamento do erro faz um return onde ele for instanciado.
        } catch (error) {
          // console.log("error capturado é uma string :: ", error);
          response = ajax.responseText;
        }
      }
      console.log(response);
    },
    false
  );

})(window);
