(function(){
    'use strict';
    
    /**
     * Com o atributo .prototype das funções podemos extendê-la.
     * Ao fazermos uma extensão de uma função construtora nós podemos adicionar propriedades e métodos.
     * Pouco importa se criarmos uma propriedade/método antes ou depois do new(momento da criação da instância).
     * A propriedade/método adicionado via prototype sempre pode ser sobrescrito. 
    */

    function MyFunction(name, lastName) {
        this.name = name; 
        this.lastName = lastName;
        //this.age = 30; <-- Se fizermos isso age nunca poderá ser sobrescrito, pois o prototype não tem prioridade em relação aos valores padrões do objeto.
    }

    MyFunction.prototype.fullName = function() {
        return this.name + ' ' + this.lastName;
    }

    var guilherme = new MyFunction('Guilherme', 'Borges');
    console.log(guilherme.fullName());

    console.log("-------------------");

    MyFunction.prototype.age = 26;

    console.log(guilherme.age);

    console.log("-------------------");    

    MyFunction.prototype.age = 27;

    console.log(guilherme.age);

}());