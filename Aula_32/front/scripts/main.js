(function(doc, win) {

  'use strict';

  /**
   * Vamos aqui exemplificar Rest API com Express.
   * Para isso usamos Node.js no server side.
  */

  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'localhost:3000/user');
  ajax.send();

  ajax.addEventListener('onreadystatechange', function(e) {
    if(ajax.readyState === 4 && ajax.status === 200)
      console.log(ajax.responseText);
  }, false);


})(document, window);
