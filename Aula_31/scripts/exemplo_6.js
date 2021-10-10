(function() {

  'use strict';

  /**
   * Uma particularidade do objeto Math() é que a maioria dos seus métodos são estáticos.
   * Os mais usuais são:
   * Math.abs(x) -> Retona o valor não negativo do "x" passado.
   * Math.ceil(x) -> Traz o valor arredondado de "x", arredondando para o próximo inteiro.
   * Math.floor(x) -> Traz o valor arredondado de "x", arredondando para o inteiro anterior.
   * Math.round(x) -> Traz o valor arrendodado de "x", até x.4 ele arredonda pra baixo, caso contrário arredonda pra cima.
   * Math.sqrt(x) -> Devolve a raiz quadrada aproximada de "x".
   * Math.cbrt(x) -> Devolve a raiz cúbica aproximada de "x".
   * Math.max([x1, x2, xN]) -> Traz o maior valor entre os valores passados.
   * Math.min([x1, x2, xN]) -> Traz o menor valor entre os valores passados.
   * Math.random() -> Traz um número aleatório contido entre 0 e 1.
  */

  console.log(Math.abs(Math.PI* -1));
  console.log("-----------------");

  console.log(Math.ceil(Math.PI));
  console.log("-----------------");

  console.log(Math.floor(Math.PI));
  console.log("-----------------");

  console.log(Math.round(10.14));
  console.log(Math.round(10.5));
  console.log(Math.round(10.77));
  console.log("-----------------");

  console.log(Math.sqrt(8));
  console.log(Math.cbrt(8));
  console.log("-----------------");

  console.log(Math.max(-8, -3, -88, 0));
  console.log(Math.min(-8, -3, -88, 0));
  console.log("-----------------");

  //Uma outra forma de usarmos o .max e o .min é fazendo o apply() receber o array de números no 2º parâmetro:
  var numbers = [1, 0, 11, -9, 4];
  console.log(Math.max.apply(Math, numbers));
  console.log(Math.min.apply(Math, numbers));
  console.log("-----------------");

  //Gerando um número aleatório de 0 á 10
  console.log(Math.ceil(Math.random() * 10));

})();
