console.log('guilherme'.length);
console.log('-----------------');

var guilherme = new String('Guilherme');
console.log(guilherme);
console.log(guilherme.valueOf());
console.log(guilherme.charAt(0));
console.log(guilherme[0]);
console.log('-----------------');

console.log(guilherme.concat(' Silva', ' Borges'));
console.log('-----------------');

console.log(guilherme.indexOf('e'));
console.log('-----------------');

console.log("Procurando pela início da string 'lher':", guilherme.indexOf('lher'));
console.log('-----------------');

console.log(guilherme.lastIndexOf('e'));
console.log('-----------------');

console.log(guilherme.replace('e', 'xxx'));
console.log('-----------------');

console.log(guilherme.slice(0,3));//Slice é 0 <= até 3 <
console.log('-----------------');

console.log(guilherme.split());
console.log('-----------------');

console.log(guilherme.split('e'));
console.log('-----------------');

console.log(guilherme.split('e').join('r'));
console.log('-----------------');

console.log(guilherme);//Nenhum destes métodos modifica o objeto String() inicial
console.log('-----------------');