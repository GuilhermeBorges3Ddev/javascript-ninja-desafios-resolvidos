(function(){
    'use strict';
    
    /**
     *  O método call() além do this pode passar outros argumentos normalmente.
     *  Um exemplo seria .call(this, arg1, arg2, ..., argN).
     *  Se você não precisa do this em uma função você pode passar .call(null, arg1, ..., argN)
     *  Além do null podemos passar qualquer coisa que denote um obj, como o próprio: {}
     *  
     *  Similar ao call(), temos o apply(), sendo que ele também aceita apply(this).
     *  A diferença é que podemos passar um array de parâmetros, seguindo a notação abaixo:
     *  .apply(this, [arg1, arg2, ..., argN])
    */

    function myFunction(a, b, c, d) {
        console.log(this.lastName, a, b, c, d);
    }

    var name = {
        firstName: "Guilherme",
        lastName: "Borges"
    }

    myFunction.call(name, 'a', 'b', 'c', 'd');

    console.log("-------------------");

    var arr = [1, 2, 3, 4];

    myFunction.apply(name, arr);

    console.log("-------------------");

}());