(function(doc){

  'use strict';

  /**
   * A propriedade ".children" não é padronizada pela W3C, ela permite trazer apenas os itens HTMLCollection, sem as quebras do NodeList que o ".childNodes" traz.
   * A propriedade ".firstElementChild" traz a primeira tag HTML do nó em que se partiu a busca.
   * A propriedade ".lastElementChild" traz a última tag HTML partindo do nó em que se deu a busca.
   * A propriedade ".nextElementSibling" traz a próxima tag HTML irmã do nó em que se deu a busca.
   * A propriedade ".previousElementSibling" traz a primeira tag HTML irmã acima do nó em que se deu a busca.
   * A propriedade ".childElementCount" retorna um inteiro com a queantidade de tags HTML filhas do elmento buscado (o mesmo que usarmos children.length).
   * -------------------------------------------------------------------------------------------------------------------------------------------------------------
   * Já quanto aos métodos, temos o .hasAttribute(name); que retorna true na presença do atributo buscado e false caso esse atributo não seja encontrado.
   * O método .hasAttributes() por sua vez não busca por um atributo específico, mas sim se o nó buscado possui algum atributo; caso tenha algum 'true', caso não, 'false'.
  */

  var $main = doc.querySelector(".main");
  var $header = doc.querySelector(".main-header");
  var $mainContent = doc.querySelector(".main-content");

  console.log(".childNodes :: ", $main.childNodes);
  console.log(".children :: ", $main.children);

  console.log("------------------------");

  console.log($header.firstElementChild);

  console.log("------------------------");

  console.log($mainContent.lastElementChild);

  console.log("------------------------");

  console.log($main.firstElementChild.nextElementSibling);

  console.log("------------------------");

  console.log($main.firstElementChild.nextElementSibling.previousElementSibling);

  console.log("------------------------");

  console.log($main.childElementCount);

  console.log("------------------------");

  console.log($main.hasAttribute('class'));
  console.log($main.hasAttribute('id'));
  console.log($main.hasAttribute('data-js'));

  console.log("------------------------");

  console.log($mainContent.firstElementChild.firstElementChild.hasAttributes());

}(document));
