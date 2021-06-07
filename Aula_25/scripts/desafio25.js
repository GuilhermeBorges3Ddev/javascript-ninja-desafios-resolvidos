(function(doc){

  'use strict';

  /*
    Essa semana você terá dois desafios:
      1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
      tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
      ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
      o que não ficou tão claro das aulas anteriores.
      É essencial que você entenda todo o conteúdo que foi passado até aqui,
      para que possamos prosseguir para a parte mais avançada do curso :D
      2) Estudar eventos!
      Acesse a página do MDN:
      https://developer.mozilla.org/en-US/docs/Web/Events#Categories
    Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
    desafio os experimentos legais que você conseguir desenvolver :D
  */

  function addEvent(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  function removeEvent(element, event, callback) {
    doc.querySelector(element).removeEventListener(event, callback, false);
  }

  function externalLinksContainerClick() {
    console.log("Div que contêm os link foi clicada");
    console.log("-----------------------------");
  }

  function firstLinkClick(e) {
    e.preventDefault();
    console.log("Link mais externo foi clicado");
    console.log("-----------------------------");
  }

  function secondLinkClick(e) {
    e.preventDefault();
    console.log("Link do meio foi clicado");
    console.log("-----------------------------");
  }

  function thirdLinkClick(e) {
    e.preventDefault();
    console.log("Link mais interno foi clicado");
    console.log("-----------------------------");
  }

  addEvent('[data-js="external-links-div"]', 'click', externalLinksContainerClick);
  addEvent('[data-js="first-link"]', 'click', firstLinkClick);
  addEvent('[data-js="second-link"]', 'click', secondLinkClick);
  removeEvent('[data-js="external-links-div"]', 'click', externalLinksContainerClick);
  addEvent('[data-js="third-link"]', 'click', thirdLinkClick);

  addEvent('[data-js="simple-btn"', 'pointerenter', function(event) {
    console.log("-----------------------------");
    console.log("Pointer cursor passed by simple button, generating event: ", event);
    console.log("-----------------------------");
  });

  addEvent('[data-js="svg-element"]', "mouseenter", function() {
    var inner = doc.getElementById('inner');
    inner.r.baseVal.value *= 1.1;
  });

}(document))
