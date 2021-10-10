(function(doc) {

  'use strict';

  /**
   * Neste exemplo, pegaremos o texto digitado na tag textarea do index.html e inseriremos ele via innerHTML.
   * O problema da injeção de HTML via innerHTML é que a entrada de eventos por parte do usuário exporá todo o nosso código.
   * Vemos que o innerHTML é manipulável à ponto de fazermos XSS, por isso não é recomendado.
  */

  var $div = doc.querySelector('[data-js="main"]');
  var $textarea = doc.querySelector('[data-js="textarea"]');
  var $form = doc.querySelector('[data-js="form"]');

  $form.addEventListener('submit', function(e) {
    e.preventDefault();
    $div.innerHTML = $textarea.value;
  }, false);

})(document);
