(function(doc){

  'use strict';

  /*
      Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
      métodos semelhantes aos que existem no array, mas que sirvam para os
      elementos do DOM selecionados.
      Crie os seguintes métodos:
      - forEach, map, filter, reduce, reduceRight, every e some.
      Crie também métodos que verificam o tipo do objeto passado por parâmetro.
      Esses métodos não precisam depender de criar um novo elmento do DOM, podem
      ser métodos estáticos.
      Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
      no objeto, como nos exemplos abaixo:
      DOM.isArray([1, 2, 3]); // true
      DOM.isFunction(function() {}); // true
      DOM.isNumber('numero'); // false
      Crie os seguintes métodos para verificação de tipo:
      - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
      O método isNull deve retornar `true` se o valor for null ou undefined.
  */

  function DOM(selectedNodeDom) {
    this.element = this.getDomElements(selectedNodeDom);
  }

  DOM.prototype.getDomElements = function getDomElements(elements) {
    return doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback, false);
    });
  }

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback, true);
    });
  }

  DOM.prototype.get = function get() {
    return this.element;
  }

  var $a = new DOM('[data-js="link"]');

  $a.on('click', function handleClick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click', handleClick);
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);

  console.log("----------------------");

  /**
   * Criação dos seguintes métodos genéricos para a nossa lib DOM:
   * forEach, map, filter, reduce, reduceRight, every e some
  */

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  /**
   * Testando os seguintes métodos genéricos criados:
   * forEach, map, filter e reduce
  */

  $a.forEach(function(item, index) {
    console.log(`Item ${index} impresso via DOM.forEach: ` + item.firstChild.nodeValue);
  });

  console.log("----------------------");

  var dataJs = $a.map(function(item) {
    return item.getAttribute('data-js');
  });

  console.log(dataJs);
  console.log("----------------------");

  var dataJsFiltered = $a.filter(function(item) {
    return item.getAttribute('data-js') !== 'link';
  });

  console.log(dataJsFiltered);
  console.log("----------------------");

  var dataJsReduced = $a.reduce(function(acc, item, index) {
    return acc + ' ' + item.getAttribute('data-js') + ' ' + index;
  }, 0);

  console.log(dataJsReduced);
  console.log("----------------------");

  /**
   * Criação dos métodos para verificação de tipo:
   * isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  */

  DOM.prototype.isArray = function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(func) {
    return Object.prototype.toString.call(func) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(num) {
    return Object.prototype.toString.call(num) === '[object Number]';
  };

  DOM.prototype.isString = function isString(str) {
    return Object.prototype.toString.call(str) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(bool) {
    return Object.prototype.toString.call(bool) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(nullVal) {
    return (Object.prototype.toString.call(nullVal) === '[object Null]') || (Object.prototype.toString.call(nullVal) === '[object Undefined]') ;
  };

  var dom = new DOM();

  console.log(dom.isArray([1, 2, 3]));
  console.log("----------------------");

  console.log(dom.isObject([]));
  console.log("----------------------");

  console.log(dom.isFunction({}));
  console.log("----------------------");

  console.log(dom.isArray([1, 2, 3]));
  console.log("----------------------");

  console.log(dom.isNumber(null));
  console.log("----------------------");

  console.log(dom.isString(" "));
  console.log("----------------------");

  console.log(dom.isBoolean(""));
  console.log("----------------------");

  console.log(dom.isNull(NaN));
  console.log("----------------------");

}(document));
