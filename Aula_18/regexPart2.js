/*
    Exemplos de negadores para Regex:
        [^abc] ----> Me traga tudo que não for "a" ou "b" ou "c"... 
        \W ----> Oposto do \w, logo, traz tudo que não for alfanumérico.
        \D -----> Oposto do \d, traz tudo que não for número.
        \S ------> Qualquer caractere que não seja espaço em branco.
    Repetidores:
        {n, m} - item anterior que se repete no mínimo "n" e no max "m" vezes
*/

var textoParaTestes = `
    Manuel Marques de Sousa, Conde de Porto Alegre, apelidado de "O Centauro de Luvas", 
    foi um militar, político,abolicionista e monarquista brasileiro. 
`;

var numerosParaTeste = `1994 12 11 111111 12345678`;

//Busca por uma sequência de 3 consoantes seguidas...
var regexConsoantesApenas = /[^aeiou][^aeiou][^aeiou]/g;
console.log(textoParaTestes.match(regexConsoantesApenas));
console.log("------------------------------");

//Tudo exceto alfanuméricos 
var regexSinaisApenas = /\W/g;
console.log(textoParaTestes.match(regexSinaisApenas));
console.log("------------------------------");

//Tudo exceto números
var regexSemNumeros = /\D/g;
console.log(textoParaTestes.match(regexSemNumeros));
console.log("------------------------------");

//Pares de números que se repetem por toda a string
console.log(numerosParaTeste.match(/\d{2}/g));
console.log("------------------------------");

//Trincas ou quadras de números que se repetem por toda a string
console.log(numerosParaTeste.match(/\d{3,4}/g));
console.log("------------------------------");