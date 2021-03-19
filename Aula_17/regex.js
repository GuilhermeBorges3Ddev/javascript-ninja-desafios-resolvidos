var regex = /M/gi;
console.log(regex);
console.log("----------------------");

var textoBuscado = `Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – 
    Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar,
    político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, 
    entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, 
    que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. 
    Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte
    de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. 
    No final a província conseguiu se separar e se tornou a nação independente do Uruguai.`;

console.log(textoBuscado.match(regex));
console.log("----------------------");

/* 
    Termos:
    \w: caracteres alfanuméricos e o underscore(_)
    \d: números ("d" vem de digits)
*/

console.log(textoBuscado.match(/\w/g));
console.log("----------------------");

console.log(textoBuscado.match(/1875/g));
console.log("----------------------");

console.log(textoBuscado.match(/Guilherme/g)); //Sempre que o Regex não achar a busca ele retorna null
console.log("----------------------");

console.log(textoBuscado.match(/\d\d/g)); 
console.log("----------------------");

/* 
    Classes de caracteres(listas):
        /de|da/g ----> Traga todo "da" ou "de"
        /[abcd]/ ----> Traga o primeiro caractere que bater com esses qualquer um desses 4 caracteres da classe
    ---------------------------------------
    Agrupamento de caracteres:
        /(1875)|(1817)/ 
    ---------------------------------------
    Sequencia:
        /[0123456789]/
        /[0-9]/ -----> Notação enxuta
        /[A-Za-z0-9]/ 
        /[A-z] ------> Deve-se evitar esse tipo de busca, porque trará os caracteres seguindo a tabela UNICODE!!!
*/

console.log(textoBuscado.replace(/de/g, "DE")); 
console.log("----------------------");

console.log(textoBuscado.replace(/(de)/g, "--$1--")); 
console.log("----------------------");

console.log(textoBuscado.replace(/(d)(e)/g, "--$2--")); 
console.log("----------------------");

console.log(textoBuscado.replace(/(d)(e)/g, "--$&--")); 
console.log("----------------------");

//Os argumentos da função no segundo parâmetro são: busca total, prim, seg .... agrupamentos, qtd matches e a string buscada
console.log(textoBuscado.replace(/(d)(e)/g, function() {
    //console.log("ARGUMENTS: ", arguments);
    return (arguments[1] + arguments[2]).toUpperCase();
})); 
console.log("----------------------");

console.log('Guilherme'.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2) {
    console.log("Captura total: ", capturaTotal)
    return letra1.toUpperCase() + letra2.toLowerCase();
}));

console.log("----------------------");