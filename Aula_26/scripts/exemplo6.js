(function(doc) {

  'use strict';

  /**
   * -- Atributos do DOM: Os atributos não são somente getters, eles também são setters --
   * element.id = Pega o ID retornado em string do elemento consultado.
   * element.className = Pega o nome da/das classe/classes do elemento consultado.
   * element.getAttribute(attr) = Pega o nome de qualquer atributo passado por parâmetro.
   * element.setAttribute(attr, value) = O getAttribute() não pode ser usado para setar um atributo, por isso a necessidade desse método.
   * Obs: O .setAttribute() também pode ser utilizado para criar atributos, não só substituir valores de atributos já existentes.
  */

  var $main = doc.querySelector(".main");

  console.log($main.id, typeof $main.id);

  console.log("------------------------");

  console.log($main.className);
  $main.className = "new-main-class";

  console.log("------------------------");

  console.log($main.className);

  console.log("------------------------");

  console.log($main.getAttribute("data-js"));

  console.log("------------------------");

  $main.setAttribute("data-number", "2");
  console.log($main.getAttribute("data-number"));

}(document));
