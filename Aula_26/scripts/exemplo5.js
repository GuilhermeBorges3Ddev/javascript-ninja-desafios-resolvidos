(function(doc) {

  'use strict';

  /**
   * O método .removeChild(child) espera o nó à ser removido, caso haja erro no parâmetro de remoção, é retornado um erro no console.
   * O .replaceChild(new, old) espera por parâmetro o novo nó(new) que substituirá o filho atual(old).
   * O .createTextNode(text) é um método do document, não pode ser utilizado diretamente nas tags.
   * Outro método de document é o .createElement(tagName), que cria a tag que for passada no parãmetro "tagName".
  */

  var $main = doc.querySelector(".main");
  var $mainHeader = doc.querySelector(".main-header");
  var $cloneMainHeader = $mainHeader.cloneNode(true);
  var $mainFooter = doc.querySelector(".main-footer");
  var $h1 = $mainHeader.firstElementChild;

  var newTextNode = doc.createTextNode("Novo P!");
  var $newP = doc.createElement('p');
  $newP.appendChild(newTextNode);

  $mainHeader.removeChild($h1);

  //Na linha abaixo estamos fazendo um clone do ".main-header" e substituindo o footer...
  $main.replaceChild($cloneMainHeader, $mainFooter);

  $main.appendChild($newP);

})(document);
