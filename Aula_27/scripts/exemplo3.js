/**
 * Técnicas avançadas:
 *  - Para copiar arrays podemos usar o Array.prototype.slice(), tanto para Arrays quanto para array-likes.
 *  - Para sabermos o tipo de dado real de um elemento podemos usar: Object.prototype.toString().
 */

(function(doc){

  'use strict';

  var arr = [1, 2, 3, 4, 5];
  var arr2 = arr.slice();
  console.log(arr, arr2, arr === arr2);

  //Se repararmos, arr e arr2 são iguais, e não uma cópia um do outro...
  //var arr2 = arr;
  //console.log(arr, arr2, arr === arr2);

  console.log("----------------------");

  var $divs = doc.querySelectorAll("div");
  var $divsCopy = Array.prototype.slice.call($divs);
  console.log($divs, $divsCopy, $divs === $divsCopy);

  console.log("----------------------");

  var obj  = function(){
    return {
      prop1: 1,
      prop2: 2
    }
  };

  function myFunc() {
    console.log(Object.prototype.toString.call(arguments));
  }

  myFunc();

  console.log(Object.prototype.toString.call(arr));
  console.log(Object.prototype.toString.call(obj));

  console.log("----------------------");

  function is(obj) {
    return Object.prototype.toString(obj);
  }

  console.log(is(obj));

})(document);
