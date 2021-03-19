var arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));//Se não houver o elemento no array é retornado o índice "-1"

console.log("------------");

console.log(arr.indexOf(2, 2));//Buscando à partir de uma posição: elemento procurado, índice de início da busca

console.log("------------");

var nome = ['a', 'n', 'a', 'l'];

console.log(nome.lastIndexOf('a'));
console.log(nome.lastIndexOf('a', 0));

console.log("------------");

console.log(Array.isArray(arr));
console.log(typeof arr);