(function(doc){

  'use strict';

  /**
   * Quando colocamos 'false' ao fim do eventListener ele aplica a propagação de filho pra pai
   * Se colocarmos 'true' no eventListener pai ele propaga ao contrário, ou seja, não sobre até o evento do pai
  */

  function on(element, event, callback) {
    doc.querySelector(element)
    .addEventListener(event, callback, true);
  }

  on('[data-js="link"]', 'click', function(event) {
    event.preventDefault();
    alert('Clicou na tag <a>')
  });

  on('[data-js="div"]', 'click', function(){
    alert('Clicou na <div>');
  });

  on('[data-js="span"]', 'click', function(){
    alert('Clicou no <span>');
  });


})(document);
