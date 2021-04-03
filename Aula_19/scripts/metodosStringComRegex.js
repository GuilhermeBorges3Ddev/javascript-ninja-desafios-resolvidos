//Método match() já visto, onde se encontrar semelhança retorna a própria string(ou array) encontrada...
//Se não passarmos a flag 'g' será retornado o resultado da busca, o índice dela, o input e os groups
console.log('Guilherme'.match(/lher/))
console.log('Guilherme'.match(/e/g))

console.log("----------------------------------------")

//O replace(x, y) pode apresentar em 'x' a Regex e em 'y' uma função ou grupo de captura...
//Já o split() pode conter internamente uma Regex, conforme exemplo abaixo:
console.log("111.222.333-44".split(/\D/))

console.log("----------------------------------------")

//O método search() busca por algo em uma string, este algo pode ser uma Regex
//Caso encontre ele retorna o index, senão retorna "-1"
console.log("111.222.333-44".search(/\./))

console.log("----------------------------------------")