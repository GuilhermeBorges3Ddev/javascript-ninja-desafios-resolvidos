(function(win, doc){
    'use strict'

    /**
     * Da linha 7 à linha 12 estamos manipulando window.prompt
    */
    var userName = prompt('Qual é o seu nome?');

    if(userName)
        console.log('respondeu o nome: ', userName);
    else
        console.log('não respondeu o nome');

    console.log("-------------------------------------");    
    
    console.log("Após a resposta/ou não sempre serei lido");

    console.log("-------------------------------------");

    /**
     * Da linha 23 ate a 27 estamos usando o window.confirm
     */
    var del = confirm('Deseja realmente excluir?');
    if(del)
        console.log('Excluído com sucesso: ', del);
    else
        console.log('Ação cancelada: ', del);

    console.log("-------------------------------------");

    /**
     *  Da linha 37 até a linha explorarei o objeto window.document
     *  Lembrando que o document em questão é o HTML que chama esse JS
     *  Podemos acessar o document como objeto para recuperar elementos
     *  
    */
    console.log("Tag <a> do meu documento com id 'my-link': ", doc.getElementById("my-link"));
    console.log("-------------------------------------");
    console.log("Tags <a> do meu documento com classe 'my-class': ", doc.getElementsByClassName("my-class"));
    console.log("-------------------------------------");
    console.log("Tags <a> do meu documento sem fitrar por classe ou id: ", doc.getElementsByTagName("a"));

    
})(window, document)