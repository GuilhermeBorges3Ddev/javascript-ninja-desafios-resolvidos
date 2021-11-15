'use strict';


var expect  = require('chai').expect;
var sum = require('../src/sum');

/**
 * Lembrando que estamos usando Mocha...
 * Cada it() dentro do describe() refere-se à um teste diferente.
 * Dentro do it() o primeiro parâmetro será a descrição do teste e o segundo será o
 * método de callback que será chamado quando o teste for executado.
 *
 * Para fazermos as asserções utilizaremos o módulo Chai...
 * A primeira asserção que fazemos é que o módulo 'sum' deve ser uma função.
 *
*/

describe('# SUM', function() {
  it('Module SUM must be a function', function() {
    expect(sum).to.be.a('function');
  });
});
