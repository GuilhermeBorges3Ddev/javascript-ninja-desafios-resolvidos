// Um dos usos da diretiva 'use strict' é não permitir variáveis serem criadas sem var...
// Com a diretiva tbm não podemos usar o encurtador de objetos 'with'...
// Como sabemos o this dentro de uma função remete ao 'window', porém com strict esse this é undefined...
// Esta diretiva também lança um SynthaxError caso o objeto não possa ser deletado...
// Por fim, esta cláusula também não permite que hajam propriedades repetidas dentro de objetos...
// Argumentos de funções também devem ter nomes diferentes quando a cláusula está ativa...

(function (){
    'use strict';
    var myName = "Guilherme B.";
    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    //prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33',
                }
            }
        }
    }
    console.log(obj.prop1.prop2.prop3);
    /** 
     * A notação 'with' encurta um objeto, sendo o parâmetro o próprio escopo do objeto...
        with(obj.prop1.prop2.prop3) {
            console.log(prop31, prop32, prop33);
        }
    */
    var obj2 = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    }

    //soma(a, a, c) não funcionaria
    function soma(a, b, c) {
        return a + b;
    }

    console.log("----");
    console.log(myName);
    console.log("----");
    console.log(delete obj2.prop1);
    console.log("------");
    console.log(obj);
    console.log("------");
    //console.log(soma(1, 2, 3));
    console.log("------");
    //console.log(delete myName);
})();