(function(doc) {

  'use strict';

  /**
   *  Falando sobre a propriedade innerHTML, vale ressaltar que ela é getter e setter ao mesmo tempo, vinda do objeto DOM.
   *  Para usarmos o innerHTML como setter, basta alocarmos dentro da string de inserção tags como textos.
  */

  var $div = doc.querySelector('[data-js="main"]');

  //Retornando a div diretamente é retornado um obj DOM Element/HTMLDivElement!
  console.log($div, Object.prototype.toString.call($div));

  console.log("-----------------");

  //Já usando o innerHTML o conteúdo da div é retornado como String!
  console.log($div.innerHTML, typeof $div.innerHTML);

  console.log("-----------------");

  //Se atribuirmos diretamente com o "=", o conteúdo prévio seria substituído
  $div.innerHTML += '<h5>Texto inserido via innerHTML</h5>';

})(document);
