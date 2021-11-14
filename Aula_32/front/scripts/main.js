(function() {

  'use strict';

  /**
   * Vamos aqui exemplificar Rest API com Express.
   * Para isso usamos Node.js no server side.
   * Observação:
   * ajax.abort() => Método útil para casos onde queremos buscar somente os headers.
  */

  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/user/guilherme');
  /*
    Se executarmos a linha abaixo com o 3º parâmetro 'false', estamos explicitando que queremos uma requisição sync:
    ajax.open('GET', 'http://localhost:3000/user/guilherme', false);
  */
  ajax.send();

  ajax.onreadystatechange = function(e) {
    if(ajax.readyState === 2) {
      console.log("Headers OK!");
      // ajax.abort();
    }
    if(ajax.readyState === 4) {
      console.log("Backend sucess :: ", e)
      // Quando usamos o ajax.abort() o status virá '0', pois a requisição não foi finalizada
      console.log(ajax.responseText, ajax.status);
    }
  };

})();
