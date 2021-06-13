(function(doc){

  'use strict';

  /**
   * O atributo ".parentNode" obtém o nó "pai" do elemento consultado
   * O atributo ".childNodes" trás todos os nós "filhos" do nó/elemento consultado.
   * Os atributos ".firstChild" e ".lastChild" servem para pegar respectivamente o primeiro e o último nó do elemento consultado.
   * Já o atributo ".nextSibling" pega o primeiro irmão após o nó consultado na DOM.
   * E o atributo ".previousSibling" retorna o primeiro irmão antes do nó consultado, caso não haja, retorna 'null'.
  */

  var $main = doc.querySelector('.main');
  var $mainContent = doc.querySelector('.main-content');

  console.log($main.parentNode);

  console.log("------------------------");

  console.log($main.childNodes);

  console.log("------------------------");

  console.log($main.lastChild);

  console.log("------------------------");

  console.log($main.nextSibling);

  console.log("------------------------");

  console.log($mainContent.previousSibling);

})(document);
