(function() {

  'use strict';

   /*
   * Continuando o assunto REST Api só que utilizando POST:
   * O POST é bastante similar ao GET: ajax.open('POST', <url>)...
   * Porém é necessário explicitar o headers com o método abaixo:
   * ajax.setRequestHeader(<key>,<value>)
   * Exemplo: ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
   * Após isso enviamos o par chave/valor no .send():
   * ajax.send('key1=value1')
   * Para mais de um par chave/valor usamos:
   * ajax.send('key1=value1&key2=value2')
  */

   var post = new XMLHttpRequest();
   post.open('POST', 'http://localhost:3000/user');
   post.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
   post.send('username=roberto&user=Roberto&age=32');

   console.log('Cadastrando usuário...');

   post.onreadystatechange = function(e) {
     if(post.readyState === 4) {
       console.log('Usuário cadastrado!', post.responseText);
     }
   }

  /**
   * Vamos aqui exemplificar Rest API com Express.
   * Para isso usamos Node.js no server side.
   * Observação:
   * ajax.abort() => Método útil para casos onde queremos buscar somente os headers.
  */

  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/user/roberto');
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
      // Quando usamos o ajax.abort() o status virá '0', pois a requisição não foi finalizada
      console.log(JSON.parse(ajax.responseText));
    }
  };

})();
