(function(doc, win) {

  'use strict';

  /**
   * Vamos aqui exemplificar Rest API com Express.
   * Para isso usamos Node.js no server side.
  */

  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/user/guilherme');
  ajax.send();

  ajax.addEventListener('readystatechange', function(e) {
    if(ajax.readyState === 4) {
      console.log("Backend sucess :: ", e)
      console.log(ajax.responseText, ajax.status);
    }
  }, false);


})(document, window);
