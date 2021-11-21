/**
 * Como Javascript foi evoluindo do ES5 para o ES6 e assim por diante, algumas coisas foram depreciadas, acessando o link abaixo vemos quais foram esses itens que entraram em desuso:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features
 * Documentação do Uglify.JS:
 * https://www.npmjs.com/package/uglify-js
 * Se executarmos: uglifyjs main.js ele não gera o output, só mostra como ficaria o arquivo minificado.
 * Para conseguirmos gerar um arquivo de output usamos: uglifyjs --output nomeDoArquivoGerado -- arquivoQueSeráMinificado
 * Exemplo: uglifyjs --output main.min.js -- main.js
 * Se precisarmos minificar ainda mais nosso arquivo, passamos o argumento "--compress": uglifyjs --output main.min.js --compress -- main.js
 * Existe um comando de terminal que lista os arquivos e mostra os seus tamanhos: ls -la (em bytes) ou ls -lha(em kbytes)
*/

(function() {

  'use strict';

  function init() {
    console.log('Hey');
  }

  init();
})();
