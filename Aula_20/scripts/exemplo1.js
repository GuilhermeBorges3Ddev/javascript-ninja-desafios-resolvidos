/**
 * Sempre que precisarmos passar parâmetros globais de fora do escopo de uma IIFE 
 * Nós passomos via parâmetro, para acessar de dentro dela.
 */
(function(window){
    'use strict';
    console.log("Largura no navegador: ", window.innerWidth)
}(window));

/**
 * Como o espoco de uma variável de uma função é interno a ela,
 * mesmo que a variável se repita fora da função ela ficará acessível de dentro dela.
 */
var name = "daciuk";
function myFunction() {
    var name = 'arroz';
    console.log(name)
}
myFunction();
console.log(name)

/**
 * Quando usamos o "win" abaixo, estamos explicitamente fazendo uma cópia de window.
 * A vantagem é que não manipularemos diretamento o objeto global.
 * Outro conceito chave é o de if() sem as chaves, o mesmo vale para for() e para while(); apenas uma linha após o if será executada
 */

// (function(win) {
//     if( win === window )
//         console.log("win é uma referência para window")
//     console.log("Esta mensagem sempre aparecerá")
// })(window);

/**
 * Um método útil do objeto window é o alert(), que retorna uma mensagem na tela
 */
function chamaAlert(mensagem) {
    window.alert(mensagem)
    //alert(mensagem) --> Métodos do window podem vir puros, sem referenciar window
}
chamaAlert("O alert() bloqueia a navegação")

/**
 * Outro método de window é o window.prompt() para fazer uma pergunta, esperando-se uma resposta
 * Repare que usei o if-else de uma linha
 */
if(prompt("Isso é uma pergunta?")) 
    console.log("Houve resposta")
else 
    console.log("Não houve resposta")