(function(doc){
    'use strict'
    /**
     * Quando manipulamos elementos do DOM nós nomeamos a variável com '$'
     */
    var $inputs = doc.getElementsByTagName("input");
    console.log("Número de tags <input> no nosso HTML: ", $inputs.length);
    console.log("-------------------------------------");

    /** 
     * O 'name' se refere à tag <input> do index.html, pelo fato dela 
    */
    console.log("Pegando elementos do meu NodeList pelo name igual a 'username': ", doc.getElementsByName("username"));
    console.log("-------------------------------------");

    /**
     *  Temos também dois métodos de document para seleção de tags, o querySelector() e o querySelectorAll()
     *  Caso novas tags sejam adicionadas no HTML esses métodos preveem a não atualização da variável
     */
    $inputs = doc.querySelector('input');
    console.log("Pegando a primeira tag <input> do HTML: ", $inputs);
    console.log("-------------------------------------");

    $inputs = doc.querySelectorAll('input');
    console.log("Pegando a todas as tag <input> do HTML: ", $inputs);
    console.log("-------------------------------------");

    $inputs = doc.querySelectorAll('[type="password"]');
    console.log("Pegando todos os <input> do HTML que sejam do tipo password: ", $inputs);
    console.log("-------------------------------------");

    /**
     * Usando agora o querySelector() para pegar ids
     */
    var $getPasswordId = doc.querySelector("#password");
    console.log("Segue elemento com id igual a password: ", $getPasswordId)
    console.log("-------------------------------------");

})(document);