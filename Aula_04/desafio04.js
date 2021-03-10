/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(arg1) {
    return !!arg1; 
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log("Passando para a função 'isTruthy' uma string vazia: " + isTruthy(""));
console.log("Passando para a função 'isTruthy' o número 0: " + isTruthy(0));
console.log("Passando para a função 'isTruthy' o número -0: " + isTruthy(-0));
console.log("Passando para a função 'isTruthy' o valor 'false': " + isTruthy(false));
console.log("Passando para a função 'isTruthy' o valor null: " + isTruthy(null));
console.log("Passando para a função 'isTruthy' o valor NaN: " + isTruthy(NaN));
console.log("Passando para a função 'isTruthy' o valor undefined: " + isTruthy(undefined));
console.log("-------------------------------------------");

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log("Passando para a função 'isTruthy' uma string com espaço: " + isTruthy(" "));
console.log("Passando para a função 'isTruthy' o número -1: " + isTruthy(-1));
console.log("Passando para a função 'isTruthy' o valor 'hell0': " + isTruthy('hell0'));
console.log("Passando para a função 'isTruthy' o valor 3.1416: " + isTruthy(3.1416));
console.log("Passando para a função 'isTruthy' uma função vazia sem retorno: " + isTruthy(function(){}));
console.log("Passando para a função 'isTruthy' um array: " + isTruthy([]));
console.log("Passando para a função 'isTruthy' um objeto: " + isTruthy({}));
console.log("Passando para a função 'isTruthy' o booleano true: " + isTruthy(true));
console.log("Passando para a função 'isTruthy' o valor 10000: " + isTruthy(10000));
console.log("Passando para a função 'isTruthy' a string '123': " + isTruthy('123'));
console.log("-------------------------------------------");

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
    - `marca` - String
    - `modelo` - String
    - `placa` - String
    - `ano` - Number
    - `cor` - String
    - `quantasPortas` - Number
    - `assentos` - Number - cinco por padrão
    - `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: "BMW",
    modelo: "Z4",
    placa: "FFF-2133",
    ano: 2018,
    cor: "Prata",
    quantasPortas: 2,
    assentos: 5,
    quantidadePessoas: 0
}


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(novaCor){
    carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
    "Esse carro é um [MARCA] [MODELO]"
    Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo();
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
    - Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
    número não precisa encher o carro, você poderá acrescentar as pessoas aos
    poucos.
    - O método deve retornar a frase: "Já temos [X] pessoas no carro!"
    - Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
    deve retornar a frase: "O carro já está lotado!"
    - Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
    parâmetro for ultrapassar o limite de assentos do carro, então você deve
    mostrar quantos assentos ainda podem ser ocupados, com a frase:
    "Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
    - Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
    citado acima, no lugar de "pessoas".
*/
carro.adicionarPassageiros = function(qtdPassageiros){

    var totalPassageiros = carro.quantidadePessoas + qtdPassageiros;
    
    if((carro.quantidadePessoas === carro.assentos) && (totalPassageiros >= carro.assentos)){
        return console.log("O carro já está lotado!");
    }

    if(totalPassageiros > carro.assentos){

        var qtdOcupantes = carro.assentos - carro.quantidadePessoas;
        var pluralSingular = (qtdOcupantes === 1) ? "pessoa" : "pessoas";
        
        return console.log("Só cabem mais " + qtdOcupantes + " " + pluralSingular + "!")
    }

    carro.quantidadePessoas += qtdPassageiros;
    return console.log("Já temos "+ totalPassageiros + " pessoas no carro!");
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log("Qual a cor atual do carro? " + carro.obterCor());
console.log("-------------------------------------------");

// Mude a cor do carro para vermelho.
carro.mudarCor("Vermelho")

// E agora, qual a cor do carro?
console.log("E agora, qual a cor atual do carro? " + carro.obterCor());
console.log("-------------------------------------------");

// Mude a cor do carro para verde musgo.
carro.mudarCor("Verde musgo")

// E agora, qual a cor do carro?
// E agora, qual a cor do carro?
console.log("E agora, qual a cor atual do carro? " + carro.obterCor());
console.log("-------------------------------------------");

// Qual a marca e modelo do carro?
console.log("Qual a marca e modelo do carro? " + carro.obterMarcaModelo());
console.log("-------------------------------------------");

// Adicione 2 pessoas no carro.
carro.adicionarPassageiros(2);
console.log("-------------------------------------------");

// Adicione mais 4 pessoas no carro.
carro.adicionarPassageiros(4);
console.log("-------------------------------------------");

// Faça o carro encher.
carro.adicionarPassageiros(3);
console.log("-------------------------------------------");

// Tire 4 pessoas do carro.
carro.adicionarPassageiros(-4);
console.log("-------------------------------------------");

// Adicione 10 pessoas no carro.
carro.adicionarPassageiros(10);
console.log("-------------------------------------------");

// Quantas pessoas temos no carro?
console.log("Quantas pessoas temos no carro? " + carro.quantidadePessoas);
console.log("-------------------------------------------");