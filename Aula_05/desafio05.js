/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer  = [function (){}, [], {}, NaN, false, 3.141618]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recArr(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recArr(qualquer)[1]);
console.log("-------------------------------------------");

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function doisParams(array, num){
  return array[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrHeterogeneo = ["speak", 30, false, {}, null, [] ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log("arrHeterogeneo[0]: " + doisParams(arrHeterogeneo, 0));
console.log("arrHeterogeneo[1]: " + doisParams(arrHeterogeneo, 1));
console.log("arrHeterogeneo[2]: " + doisParams(arrHeterogeneo, 2));
console.log("arrHeterogeneo[3]: " + doisParams(arrHeterogeneo, 3));
console.log("arrHeterogeneo[4]: " + doisParams(arrHeterogeneo, 4));
console.log("-------------------------------------------");

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
  - esse objeto irá receber 3 propriedades, que serão nomes de livros;
  - cada uma dessas propriedades será um novo objeto, que terá outras 3
  propriedades:
      - `quantidadePaginas` - Number (quantidade de páginas)
      - `autor` - String
      - `editora` - String
  - A função deve retornar o objeto referente ao livro passado por parâmetro.
  - Se o parâmetro não for passado, a função deve retornar o objeto com todos
  os livros.
*/
function book(titulo) {
  
  var bookProps = {
    
    "Harry Poter e a Pedra Filosofal": {
      quantidadePaginas: 512,
      autor:"J.K Rolling",
      editora: "Rocco"
    },

    "O Cerebro Autista": {
      quantidadePaginas: 400,
      autor:"Temple Grandin",
      editora: "Mundo Novo S.A"
    },

    "Clean Code": {
      quantidadePaginas: 387,
      autor: "Uncle Bob",
      editora: "Pressman Publications"
    }

  }
 
  return (titulo) ? bookProps[titulo] : bookProps;

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
console.log("-------------------------------------------");

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Cérebro Autista';
console.log("O livro "+ "'" + bookName + "'" + " tem " + book("O Cerebro Autista").quantidadePaginas + " páginas!");
console.log("-------------------------------------------");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
bookName = 'Harry Poter e a Pedra Filosofal';
console.log("O autor do livro " + "'" + bookName + "'" + " é " + book("Harry Poter e a Pedra Filosofal").autor + ".");
console.log("-------------------------------------------");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = 'Clean Code';
console.log("O livro " + "'" + bookName + "'" + " foi publicado pela editora " + book("Clean Code").editora + ".");
console.log("-------------------------------------------");