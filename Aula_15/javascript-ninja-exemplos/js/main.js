(
    function() { 
    var local = "Local";
    console.log('Var local criada na IIFE: ', local);

    //O this nada mais é do que uma referência ao objeto quando chamado de um método interno ao obj...
    var myObject = {
        myProperty: 1,
        init: function init() {
            return this.myProperty;
        }
    }

    console.log('This aqui faz referência ao próprio obj: ',myObject.init());

    //O this dentro de funções referencia o objeto global windows ou a referência à um obj instanciado(construtor)...
    function myFunction() {
        return this;
    }

    console.log('This aqui dentro de function faz referência ao obj "window": ', myFunction() === window);

    function MyConstructor() {
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
        return 'qlqr coisa';
    };
    console.log('MyConstructor', new MyConstructor());

    var constructor = new MyConstructor();
    var fakeConstructor = MyConstructor();

    /*
        CASO ESSA VAR SEJA TIRADA DO COMENTÁRIO ELA SOBRESCREVE A VARIÁVEL 'prop1' CRIADA PELO 'fakeConstructor'...
        prop1 = "propriedade1";
    */

    console.log('prop1 dentro de window: ', window.prop1);
    console.log('prop1 dentro do constructor: ', constructor.prop1);
    console.log('fakeConstructor: ', fakeConstructor);

    //Assim como o 'this' temos outro objeto global(array-like), o 'arguments', que retorna os argumentos da função...
    function myCustomFunction() {
        return arguments;
    }

    console.log(myCustomFunction(1, 2, 3, 4, 5));

}());