/**
 * A posição dos scripts no HTML importa, isto é, para controlar a ordem de carregamento temos eventos para isso.
 * Um destes eventos de document é o DOMContentLoaded, que dispara o conteúdo depois que o DOM foi carregado.
 * O DOMContentLoaded fundamentalmente tenta carregar tudo o que for preciso para processar o script em questão.
 * Temos também um evento de window para esperar carregamento de toda a página, esse evento é o "load".
 */

(function(doc, win){

  'use strict';

  function afterDomContentLoaded() {
    alert('DOMContentLoaded');
    var fragment = doc.createDocumentFragment();
    var childP = doc.createElement('p');
    var textChildP = doc.createTextNode('Texto da tag "p"');

    childP.appendChild(textChildP);
    fragment.appendChild(childP);
    doc.body.appendChild(fragment);
  }

  doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);

  function afterWindowLoad() {
    alert('AfterWindowLoad')
  }

  win.addEventListener('load', afterWindowLoad, false);

}(document, window));
