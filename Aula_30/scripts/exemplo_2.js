(function() {

  'use strict';

  /**
   * Se chamarmos duas funções que compartilham uma variável numa mesma 'closure', teremos sobrescrita...
   * Uma forma que temos de previnir esse comportamento é tornar uma delas uma IIFE;
  */

  var counter = 0;

  // function increment() {
  //   return counter++;
  // }

  var increment = (function() {
    var counter = 100;
    return (function() {
      var counter = 10;
      return function() {
        return counter++;
      };
    })();
  })();

  function otherFunction() {
    counter = 150;
    return counter;
  }

  console.log(otherFunction());

  console.log("-----------------");

  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());

})();
