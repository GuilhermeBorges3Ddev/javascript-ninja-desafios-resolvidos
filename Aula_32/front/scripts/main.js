(function(doc, win) {

  'use strict';

  /**
   * Vamos aqui exemplificar Rest API com Express.
   * Para isso usamos Node.js no server side.
   * Observações:
   * ajax.abort() => Útil para casos onde queremos buscar somente os headers.
   * O POST é bastante similar ao GET: ajax.open('POST', <url>)...
   * Porém é necessário explicitar o headers com o método abaixo:
   * ajax.setRequestHeader(<key>,<value>)
   * Após isso enviamos o par chave/valor no .send():
   * ajax.send('key1=value1')
   * Para mais de um par chave/valor usamos:
   * ajax.send('key1=value1&key2=value2')
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
      ajax.abort();
    }
    if(ajax.readyState === 4) {
      console.log("Backend sucess :: ", e)
      console.log(ajax.responseText, ajax.status);
    }
  };


})(document, window);
