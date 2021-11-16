/**
   *  TDD - Test Driven Development - Antes do código ser feito são codados os testes.
   *  BDD - Behavior Driven Development - Parecido com o TDD porém mais clean.
   * Dentro de testes temos o conceito RGB:
   * R - Escrever um teste que quebre.
   * G - Com o mínimo de código fazer o teste passar.
   * B - Refatorar o código que passou no teste sem adicionar novas funcionalidades.
   * Obs: a cada novo teste escrito o teste anterior não deverá quebrar!
*/

'use strict';

function sum(num1, num2) {
  if(isEmpty(num1) || isEmpty(num2)) {
    return new Error('Passe dois números por parâmetros');
  }
  if(!isNumber(num1) || !isNumber(num2)){
    return new Error('Os parâmetros devem ser números');
  }
  return num1 + num2;
}

function isEmpty(arg) {
  return !arg
}

function isNumber(arg) {
  return Object.prototype.toString.call(arg) === '[object Number]'
}

module.exports = sum;
