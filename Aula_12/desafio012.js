/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function() {

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    console.log('Propriedades de "person":');
    
    var person = {
        name: "Guilherme",
        lastname: "Borges",
        age: 26
    };

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
   console.log(Object.keys(person));
   console.log('--------------------------');

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({ name: 'Neuromancer', pages: 286 });
    books.push({ name: 'A Doutrina Secreta, vol. 1', pages: 315 });
    books.push({ name: 'Harry Potter e a Pedra Filosofal', pages: 390 });
  
    /*
    Mostre no console todos os livros.
    */
    console.log("Lista de livros:");
    console.log(books);
    console.log('--------------------------');
    
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log("Livro que está sendo removido:");
    console.log(books.pop());
    console.log('--------------------------');

    /*
    Mostre no console os livros restantes.
    */
    console.log("Agora sobraram somente os livros:");
    console.log(books);
    console.log('--------------------------');

    /*
        Converta os objetos que ficaram em `books` para strings.
    */
    books = JSON.stringify(books);

    /*
        Mostre os livros nesse formato no console:
    */
    console.log("Livros em formato string:");
    console.log(books);
    console.log('--------------------------');

    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(books);
    console.log("Agora os livros são objetos novamente:");
    console.log(books);
    console.log('--------------------------');

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for(var i = 0; i < books.length; i++) {
        for(var prop in books[i]) {
            console.log(prop + ": " + books[i][prop]);
        }
        console.log('--------------------------');
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = [];
    myName[0] = 'G',
    myName[1] = 'u',
    myName[2] = 'i',
    myName[3] = 'l',
    myName[4] = 'h',
    myName[5] = 'e',
    myName[6] = 'r',
    myName[7] = 'm',
    myName[8] = 'e'    

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
   console.log("Meu nome é:");
   console.log(myName.join(''));
   console.log('--------------------------');
    
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log("Meu nome invertido é:");
    console.log(myName.reverse().join(''));
    console.log('--------------------------');
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log("Agora em ordem alfabética:");
    console.log(myName.sort().join(''));
    console.log('--------------------------');

})();