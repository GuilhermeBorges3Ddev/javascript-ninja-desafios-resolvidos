(function(win){

  'use strict';

  /**
   * Para a manipulação do 'response' de uma requisição AJAX usamos o atributo: .responseText
   * No exemplo abaixo o .open() do AJAX é feito em um diretório data/ local com um JSON.
   * Para manipularmos o ".responseText" em JSON precisamos usar o JSON.parse(), pois o retorno é uma string, e não um objeto que podemos iterar.
   * Outro método para pegarmos o response via AJAX é usando o .responseXML, que é uma propriedade que converte o conteúdo XML em um documento.
  */

  var ajax = new win.XMLHttpRequest();
  // ajax.open('GET', './data/data.json');
  ajax.open('GET', './data/data.xml');
  ajax.send();

  function isRequestOk() {
    return (ajax.readyState === 4 ) && (ajax.status === 200);
  }

  console.log("Carregando...");

  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk()) {
      // var dataReceived =  JSON.parse(ajax.responseText);
      //console.log("Requisição feita com sucesso, retorno:", dataReceived.message);
      console.log("Requisição feita com sucesso, retorno:", ajax.responseXML);
    }
  }, false);

})(window);
