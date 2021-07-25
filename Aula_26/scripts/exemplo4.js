(function(doc){

  'use strict';

  /**
   * O método .appendChild(child) espera como parâmetro "child" um elemento.
   * Usando o .appendChild(child) o elemento passado mudará de lugar, ou seja, ele é movido permanentemente do lugar onde estava.
   * Além do .appendChild(child) temos o método .insertBefore(node, beforeWhom), que espera o elemento á ser inserido e quem é o elemento que terá sua inserção.
   * O método .cloneNode(boolean) por sua vez clona um nó que já temos, se passarmos "true" ele copia o elemento e o conteúdo, senão, apenas o elemento.
   * Também temos o método .hasChildNodes(), que
  */

  var $main = doc.querySelector('.main');
  var $mainContent = doc.querySelector('.main-content');
  var $mainHeader = doc.querySelector('.main-header');
  var $firstText = $mainContent.firstChild;

  $mainContent.appendChild($mainHeader);
  $mainContent.insertBefore($mainHeader, $firstText);
  var $cloneMainHeader = $mainHeader.cloneNode(true);
  $mainContent.appendChild($cloneMainHeader);

  console.log("------------------------");

  console.log(doc.querySelectorAll(".main-header").length);

  console.log("------------------------");

  console.log($main.firstElementChild.firstElementChild.hasChildNodes());

}(document));
