/**
    ^ --> Circunflexo fora de uma lista([]) representa o início de uma string
    $ --> Verificar se algo está no final de uma string: (qualquercoisa)$
    Flag "m" --> Busca em múltiplas linhas, se usarmos com "^" ou "$" ele busca pelo início e fim em múltiplas linhas.
    ? --> Além de 1 ou 0 caracteres de uma ocorrência, ele após um repetidor ele faz a captura mínima(vide exemplo abaixo).
    (?:) --> Somente agrupamento, sem capturar... isso deve ser colocado no início do grupo de captura
    \1, \2 --> Referenciam grupos de captura, veja o exemplo final deste arquivo
*/

console.log("A frase1 começa com uma tag <p>?")
var frase1 = "<h1> Títula da página </h1><p> Este é um parágrafo</p><footer>Rodapé</footer>"
var initStrReg = /^<p>/
console.log(frase1.match(initStrReg))

console.log("----------------------------------------")

console.log("A frase1 termina com um fechamento de tag </footer>?")
var endStrReg = /<\/footer>$/g
console.log(frase1.match(endStrReg))

console.log("----------------------------------------")

var frase2 = `<h1> Títula da página </h1>
<p> Este é um parágrafo</p>
<footer>Rodapé</footer>`

console.log("Busca aberturas de tags em linhas diferentes:")
var initMultStrReg = /^</gm
console.log(frase2.match(initMultStrReg))

console.log("----------------------------------------")

console.log("Busca mínima, trazendo apenas a primeira abertura e fechamento de tags em N tags:")
var capturaMinimaRegex = /(<\w+>).+?(<\/\w+>)/gm
console.log(frase1.match(capturaMinimaRegex))

console.log("----------------------------------------")

var meses = "junho e julho"
var apenasCapturaRegex = /ju(?:n|l)ho/g
console.log(meses.match(apenasCapturaRegex))

console.log("----------------------------------------")

console.log("Buscando pela primeira abertura e fechamento de tag:")
var usandoRefRegex = /<(\w+)>.+<(\/\1)>/gm
console.log(frase1.match(usandoRefRegex)) 