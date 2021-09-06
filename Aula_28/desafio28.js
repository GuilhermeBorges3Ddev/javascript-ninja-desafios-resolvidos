(function (win, doc) {
  "use strict";

  /*
    No HTML:
      - Crie um formulário com um input de texto que receberá um CEP e um botão
      de submit;
      - Crie uma estrutura HTML para receber informações de endereço:
      "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
      preenchidas com os dados da requisição feita no JS.
      - Crie uma área que receberá mensagens com o status da requisição:
      "Carregando, sucesso ou erro."
    No JS:
      - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
      deve ser limpo e enviado somente os números para a requisição abaixo;
      - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
      "https://ws.apicep.com/cep/[CEP].json/", onde [CEP] será o CEP passado
      no input criado no HTML;
      - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
      com os dados recebidos.
      - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
      a mensagem: "Buscando informações para o CEP [CEP]..."
      - Se não houver dados para o CEP entrado, mostrar a mensagem:
      "Não encontramos o endereço para o CEP [CEP]."
      - Se houver endereço para o CEP digitado, mostre a mensagem:
      "Endereço referente ao CEP [CEP]:"
      - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
      adicionar as informações em tela.
  */

  function DOM(selectedNodeDom) {
    this.element = this.getDomElements(selectedNodeDom);
  }

  DOM.prototype.getDomElements = function getDomElements(elements) {
    return doc.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(event, callback, true);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

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
   * Da linha 87 para baixo está de fato a resolução do desafio28.js!
   * As linhas acima são uma cópia da lib "DOM" que está no desafio27.js
   */

  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCEP = new DOM('[data-js="input-cep"]');
  var ajax = new win.XMLHttpRequest();
  $formCep.on('submit', handleSubmitFormCEP);

  function handleSubmitFormCEP(event) {
    event.preventDefault();
    var url = `https://ws.apicep.com/cep/[CEP].json/`.replace('[CEP]', $inputCEP.get()[0].value);
    ajax.open('GET', url);
    ajax.send();
    ajax.addEventListener('readystatechange', handleReadyStateChange, false);
  }

  function handleReadyStateChange() {
    if (ajax.readyState === 4 && ajax.status === 200) {
      console.log("Popular fomulário :: ", ajax.responseText)
    }
  }

})(window, document);
