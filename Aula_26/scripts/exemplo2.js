(function(doc){

  'use strict';

  /**
   * Lembrando que as propriedades abaixo pertencem aos atributos vistos no "exemplo1.js" deste mesmo diretório.
   * A propriedade ".nodeType" retorna um inteiro: (9 - document), (1 - element), (3 - text), (8 - comments) e (22 - documentFragment)
   * A propriedade ".nodeValue" nos traz o valor de tags do tipo text, element e comments.
   * A propriedade ".nodeName" nos traz o nome do nó; exemplo: #comment, #text ou o nome da tag HTML(div, header e etc).
   * Para consultarmos as Features presentes nos browsers basta acesar: http://caniuse.com
  */

  var $main = doc.querySelector('.main');
  var $mainContent = doc.querySelector('.main-content');

  console.log($main.firstChild.nodeType);

  console.log("------------------------");

  console.log($mainContent.firstChild.nextSibling.nodeValue);

  console.log("------------------------");

  console.log($mainContent.firstChild.nextSibling.nodeName);

  console.log("------------------------");

})(document);
