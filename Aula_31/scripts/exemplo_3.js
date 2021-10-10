(function(doc){

  'use strict';

  /**
   * O método insertAdjacentHTML(pos, text) assim como o innerHTML é uma propriedade de um HTMLElement.
   * A diferença é que no argumento "pos" conseguimos manipular a posição de onde a inserção será feita.
   * Temos 4 opções para o argumento "pos": beforebegin, afterbegin, beforeend, afterend.
   */

  var $form = doc.querySelector('[data-js="form"]');

  //Com o .dir() do console percebemos que todo elemento HTML possui um equivalente em string, o .outerHTML
  console.dir($form);
  $form.insertAdjacentHTML('afterend', $form.outerHTML);

  $form.insertAdjacentHTML('beforebegin', '<h1>Meu formulário:</h1>');
  //$form.insertAdjacentHTML('afterbegin', '<h1>Meu formulário:</h1>');
  //$form.insertAdjacentHTML('beforeend', '<h1>Meu formulário:</h1>');
  //$form.insertAdjacentHTML('afterend', '<h1>Meu formulário:</h1>');

})(document);
