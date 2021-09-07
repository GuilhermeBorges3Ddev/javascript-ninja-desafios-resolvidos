(function(win){

  'use strict';

  /**
   * Para manipularmos o retorno de requisições AJAX usamos eventos como o 'onreadystatechange'.
   * Podemos pendurar no window o evento diretamente(executado apenas uma vez): ajax.onreadystatechange = function(){}.
   * Ou utilizarmos para toda troca de estado na comunicação C/S, isso se dá via .addEventListener('readystatechange', método, true/false);
   * Para verificarmos o estado em que a requisição se encontra, podemos usar a propriedade: ajax.readyState
   * Estados de conexão: (0 - Não enviado/Sem open(), 1 - Conexão aberta, 2 - Headers recebidos, 3 - Carregando o corpo do request, 4 - Concluído)
   * Estados HTTP da requisição AJAX podem ser inspecionados pela propriedade: ajax.status (normalmente são retornados 200, 403, 404, ou 500)
  */

  var ajax = new win.XMLHttpRequest();
  console.log(ajax.readyState);
  console.log("----------------------");

  ajax.open('GET', './scripts/exemplo_2.js');
  console.log(ajax.readyState);
  console.log("----------------------");

  ajax.send();

  ajax.onreadystatechange = function() {
    //alert('Requisição feita.');
  }

  ajax.addEventListener('readystatechange', function() {
    console.log('Requisição terminada.', ajax.readyState, ajax.status);
  }, false);

}(window));
