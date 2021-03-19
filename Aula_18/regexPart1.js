/*
    Temos mais 4 caracteres especiais para Regex:
        \n ----> Busca por quebra de linhas
        \t ----> Busca por tabulações (tabs)
        \s -----> Busca por espaços quaisquer, seja tab, espaço simples ou a própria quebra
        . ------> Qualquer caractere, exceto quebra de linha
*/

var textoParaQuatroTestes = `
    Manuel Marques de Sousa, Conde de Porto Alegre, apelidado de "O Centauro de Luvas", 
    foi um militar, político,abolicionista e monarquista brasileiro. 
`;

//Pegando todos os caracteres, sinais gráficos e espaços...
console.log(textoParaQuatroTestes.match(/./g));
console.log("------------------------------");

//Pegando todos os espaços duplos em branco (space-space)
console.log(textoParaQuatroTestes.match(/\s\s/g));
console.log("------------------------------");

//Pegando agora todas as quebras de linha
console.log(textoParaQuatroTestes.match(/\n/g));
console.log("------------------------------");