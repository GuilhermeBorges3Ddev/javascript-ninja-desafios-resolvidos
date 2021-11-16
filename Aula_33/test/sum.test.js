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
    //Esse formato de testes abaixo é BDD
    expect(sum).to.be.a('function');
    //Caso fosse TDD teríamos algo parecido com a linha abaixo:
    //assert('Module SUM must be a function', typeof sum === 'function')
  });
  it('Function sum() should return 10 when i pass 1 and 9', function() {
    expect(sum(1,9)).to.be.equal(10);
  });
  it('Should sum() return 5 when i pass 2 and 3', function() {
    expect(sum(2,3)).to.be.equal(5);
  });
  it('Should sum() return an error if it receive just one parameter', function() {
    expect(sum(1)).to.be.an('error');
  });
  it('Should sum() return an error if the parameter has not a number', function() {
    expect(sum('a','b')).to.be.an('error');
  });
});
