(function(doc){
    'use strict'
    /**
     * Pegando os valores das tags pela propriedade .value
     * O .value serve também para setar o valor do input!
     */
    var $inputUsername = doc.querySelector("#username");
    var $inputPassword = doc.querySelector("#password");
    console.log("Obtendo os values dos inputs de username e password: ", $inputUsername.value + " - " + $inputPassword.value);
    console.log("-------------------------------------");

    $inputUsername.value = "Guilherme Borges";
    $inputPassword.value = "newpass123";
    console.log("Recapturando os novos values dos inputs de username e password: ", $inputUsername.value + " - " + $inputPassword.value);
    console.log("-------------------------------------");

    /**
     * Vamos agora capturar o username e a senha dinamicamente.
     * Para isso, adicionamos eventos com o addEventListener()
     */
    var $button = doc.querySelector("#button");
    $button.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Click no botão');
    }, false)

    /**
     * Podemos colocar um evento em qualquer elemento do DOM
     */
    $inputUsername.addEventListener('click', function() {
        alert("Usuário clicou no campo username")
    }, false)

})(document)