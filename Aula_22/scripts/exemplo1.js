(function(){
    'use strict';
    /**
    * A propriedade ".name" de uma função retorna seu nome.
    * Em casos de uma função anônima é retornado undefined
    * 
    * Outra propriedade é a length para funções...
    * Que conta a quantidade de parâmetros que ela pode receber.
    * 
    * O método toString() para funções, nós convertemos toda ela para string.
    * 
    * Outro método para funções é o call(), que faz a invocação dela.
    * Com o call(this), passamos o this desta função construtora para dentro dela.
    * 
    */
    function myFunction(a, b, c){
        return 'oi'
    }

    console.log(myFunction.length)

    console.log("-------------------");

    console.log(myFunction.toString())

    console.log("-------------------");

    console.log(myFunction.call());

    console.log("-------------------");

    function myFunction2(name){
        return this.lastName;
    }

    var obj = {
        lastName: "Borges"
    };

    var obj = {
        lastName: "Silva"
    };

    console.log(myFunction2.call(obj));

    console.log("-------------------");

    console.log(myFunction2.call(obj2));

})();