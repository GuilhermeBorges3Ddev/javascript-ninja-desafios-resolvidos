(function(){

  /**
   * Para debugarmos no browser nós vamos ao network primeiramente e vemos quais arquivos são baixados no carregamento da página.
   * Clicando no arquivo ou procurando-o na aba Sources pela aba lateral ou via Ctrl+P nós conseguimos pegar o script e adicionar breakpoints.
   * Ao passar pelos breakpoints conseguiremos capturar as variáveis locais e globais, capturando seus respectivos valores.
   * Se quisermos dentro das inspeções pegar os valores basta clicar no código depurado e pressionar Esc, assim abrimos um console local.
  */

  'use strict';

  function sum() {
    return Array.prototype.reduce.call(arguments, function(acumulator, item) {
      return acumulator + item;
    });
  }

  console.log(sum(1, 9, 1));

})();
