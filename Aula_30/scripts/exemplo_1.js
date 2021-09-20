(function(){

  'use strict';

  /**
   * Pela presença de 'closures' em JS, a variável scope dentro de checkScope() sobrescreve scope de fora do método...
  */

  var scope = "global scope";

  function checkScope() {
    var scope = "local scope";
    function func() { return scope; };
    return func;
  }

  console.log("1) ", checkScope()());

}());

console.log("2) ", scope);
