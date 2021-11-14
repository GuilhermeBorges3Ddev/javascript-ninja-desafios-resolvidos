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

  var ajax = new XMLHttpRequest();
  ajax.open('POST', 'http://localhost:3000/user');
  ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  ajax.send('username=roberto&age=32');

  console.log('Cadastrando usuário...');

  ajax.onreadystatechange = function(e) {
    if(ajax.readyState === 4) {
      console.log('Usuário cadastrado!', ajax.responseText);
    }
  }

})();
