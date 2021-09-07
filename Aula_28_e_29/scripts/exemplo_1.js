(function(doc){

  'use strict';

  /**
   * AJAX - Asynchronous Javascript and XML
   * Pelo objeto 'window' podemos instanciar uma requisição via window.XMLHttpRequest()
   * Geralmente atribuimos o XMLHttpRequest() à uma variável e abrimos uma conexão sob um método: ajax.open(<method>, <url>);
   * O <method> normalmente é um verbo HTTP ou similar, exemplo: GET, POST, PUT, DELETE, OPTIONS, HEAD e etc.
   * Se houverem dados para serem enviados para o servidor utilizamos: ajax.send(<data>).
  */

  var ajax = new XMLHttpRequest();

  ajax.open('GET', './scripts/exemplo_1.js');
  ajax.send();

})(document);
