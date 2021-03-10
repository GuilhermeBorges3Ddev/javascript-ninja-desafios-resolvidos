// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b){
    return a + b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var recebeSoma = soma(5, 6) + 5;

// Qual o valor atualizado dessa variável?
console.log("recebeSoma: " + recebeSoma);
console.log("-------------------------");

// Declare uma nova variável, sem valor.
var newVar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function atribuiVal(){
    newVar = 100;
    return console.log("O valor da variável agora é " + newVar);
}

// Invoque a função criada acima.
atribuiVal();

// Qual o retorno da função? (Use comentários de bloco).
console.log("newVar: " + newVar);

/*
Crie uma função com as seguintes características:
    1. A função deve receber 3 argumentos;
    2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
        Preencha todos os valores corretamente!
    3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function testaParams(p1, p2, p3){
    if(p1 === undefined || p2 === undefined || p3 === undefined){
        console.log("Preencha todos os valores corretamente!");
    }else{
        return console.log((p1 * p2 * p3) + 2);
    }
}
console.log("-------------------------");

// Invoque a função criada acima, passando só dois números como argumento.
testaParams(20, 0);
console.log("-------------------------");

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
testaParams(20, 10, 2);
console.log("-------------------------");

/*
Crie uma função com as seguintes características:
    1. A função deve receber 3 argumentos.
    2. Se somente um argumento for passado, retorne o valor do argumento.
    3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    5. Se nenhum argumento for passado, retorne o valor booleano `false`.
    6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function tresArgsRcv(arg1, arg2, arg3){
    if(
        (arg1 !== undefined) && (arg2 === undefined) && (arg3 === undefined)
    ){
        return arg1;
    }else if(
        (arg1 !== undefined) && (arg2 !== undefined) && (arg3 === undefined)
    ){
        return arg1 + arg2;
    }else if( 
        (arg1 !== undefined) && (arg2 !== undefined) && (arg3 !== undefined) 
    ){
        return (arg1 + arg2)/arg3;
    }else if( 
        (arg1 === undefined) && (arg2 === undefined) && (arg3 === undefined) 
    ){
        return false;
    }else{
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log("Convocando a função com NENHUM argumento: " + tresArgsRcv());
console.log("-------------------------");
console.log("Convocando a função com UM argumento: " + tresArgsRcv(122));
console.log("-------------------------");
console.log("Convocando a função com DOIS argumentos: " + tresArgsRcv(122, 2));
console.log("-------------------------");
console.log("Convocando a função com TRÊS argumentos: " + tresArgsRcv(122, 2, 2));