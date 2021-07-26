(function(doc){

  'use strict';

  /**
   * Conseguimos colocar mais de um evento por elemento... já que é uma função invocável por N vezes...
   * Com a parte comentada abaixo, que usa duas vezes a chamada do evento onclick, há a sobrescrita de eventos, por isso não é mais usado.
   * Existe também o removeEventListener() que remove um determinado evento de uma tag, desde que a função desse evento não seja anônima.
   * Quando falamos em eventos temos os eventos de formulário, para o input temos por exemplo: input, keyup e keydown.
   * Já para a tag <select> temo o evento 'change', que pega o momento em que se deu uma troca de valor de uma option para outra.
  */

  // var $a = doc.querySelector('[data-js="link"]');

  // $a.onclick = function(e){
  //   e.preventDefault();
  //   alert('Clicou no <a> de um jeito diferente');
  // }

  // $a.onclick = function(e){
  //   e.preventDefault();
  //   alert('Segundo evento de clique no <a>');
  // }

  function on(element, event, callback) {
    doc.querySelector(element)
    .addEventListener(event, callback, true);
  }

  function off(element, event, callback) {
    doc.querySelector(element)
    .removeEventListener(event, callback, true);
  }

  function handleClick(event) {
    event.preventDefault();
    alert('Clicou na tag <a>');
  }

  function handleClick2(event) {
    event.preventDefault();
    alert('Novo evento de clique no <a>');
  }

  on('[data-js="link"]', 'click', handleClick);
  off('[data-js="link"]', 'click', handleClick);
  on('[data-js="link"]', 'click', handleClick2);

  // on('[data-js="input"]', 'input', function(event){
  //   console.log(this.value);
  // });

  // on('[data-js="input"]', 'keyup', function(event){
  //   console.log(this.value);
  // });

  on('[data-js="input"]', 'keydown', function(){
    console.log("Valor capturado quando se soltar a tecla",this.value);
  });

  on('[data-js="select"]', 'change', function(){
    doc.querySelector('[data-js="input"]').value = this.value;
  });

})(document);
