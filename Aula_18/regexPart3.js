/*
    Repetidores:
        {n, } - item anterior que se repete no mínimo "n" e no max  infinitas vezes (infinitas vezes)
        {n} - item anterior ao repetidor aparecendo exatamente "n" vezes
    Caracteres especiais
        ? - caractere opcional, zero ou uma ocorrência da Regex que o precede 
        + - regex que o precede poderá ocorrer 1 a N matches combinados, ao menos uma vez
        * - regex que o precede poderá ocorrer 0 a N matches combinados
*/

var textoParaTestes = `
    Manuel Marques de Sousa, Conde de Porto Alegre, apelidado de "O Centauro de Luvas", 
    foi um militar, político,abolicionista e monarquista brasileiro. 
`;

var numerosParaTeste = `1994 12 11 111111 12345678`;

var url1 = "https://www.google.com.br";
var url2 = "https://chinleo.";
var url3 = "https://www.google.com.br";
var url4 = "https://google.com";

var email1 = "guilherme.borges@enercred.com";
var email2 = "gsilvaborges@gmail.com";
var email3 = "maria@casadamaria.com.br";

var queryParams = "?s=tenis&marca=adidas&tamanho=42";

//Busca por números que apareçam 2 ou 3 vezes
var regexComCaractereOpcional = /\d\d\d?/g;
console.log(numerosParaTeste.match(regexComCaractereOpcional));
console.log("------------------------------");

//Pegando repetições de do caractere "1"
var regexComCaractereUmOuMais = /1+/g;
console.log(numerosParaTeste.match(regexComCaractereUmOuMais));
console.log("------------------------------");

//Um outro bom exemplo seria a busca por palavras com o caractere especial "+"
var regexBuscaPorPalavras = /\w+/g;
console.log(textoParaTestes.match(regexBuscaPorPalavras));
console.log("------------------------------");

//Validando URLs com tudo o que vimos
var regexValidaURL = /https?:\/\/w+[.\w]+/;

console.log("A URL: " + url1 + " é válida ou não? (Se não, será retornado 'null')");
console.log(url1.match(regexValidaURL) ? url1.match(regexValidaURL)[0] : null);

console.log("A URL: " + url2 + " é válida ou não? (Se não, será retornado 'null')");
console.log(url2.match(regexValidaURL) ? url2.match(regexValidaURL)[0] : null);

console.log("A URL: " + url3 + " é válida ou não? (Se não, será retornado 'null')");
console.log(url3.match(regexValidaURL) ? url3.match(regexValidaURL)[0] : null);

console.log("A URL: " + url4 + " é válida ou não? (Se não, será retornado 'null')");
console.log(url4.match(regexValidaURL) ? url4.match(regexValidaURL)[0] : null);

console.log("------------------------------");

//Validando emails também utilizando tudo o que vimos combinado
var regexValidaEmail = /(w|.)+@\w+.com.?(\w{0,2})/i;

console.log("O email: " + email1 + " é válido ou não? (Se não, será retornado 'null')");
console.log(email1.match(regexValidaEmail) ? email1.match(regexValidaEmail)[0] : null);

console.log("O email: " + email2 + " é válido ou não? (Se não, será retornado 'null')");
console.log(email2.match(regexValidaEmail) ? email2.match(regexValidaEmail)[0] : null);

console.log("O email: " + email3 + " é válido ou não? (Se não, será retornado 'null')");
console.log(email3.match(regexValidaEmail) ? email3.match(regexValidaEmail)[0] : null);

console.log("------------------------------");

//Capturando as partes de uma busca em um URI
var catchQueryParamsRegex = /[?&]s=(\w+)&marca=(\w+)&tamanho=(\d{2})/gi; 
var searchedParams = function (reg, campoUm, campoDois, campoTres) {
    return "Os 3 campos buscados utilizando a Regex foram: " + campoUm + "," + campoDois + " e " + campoTres;
};
console.log(queryParams.replace(catchQueryParamsRegex, searchedParams));

console.log("------------------------------");