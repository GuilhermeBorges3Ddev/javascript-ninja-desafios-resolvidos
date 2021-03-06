/*
Envolva todo o código desse desafio em uma IIFE.
*/
(function () {

    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    console.log('O array em formato de string é:' );
    var arrayRand = [1, 10, 100, 1000];
    console.log(arrayRand.toString());
    console.log("-----------------------------------");    

    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    var sul = ['Rio Grande do Sul', 'Santa Catarina', 'Paraná'];
    var sudeste = ['Espírito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo'];

    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    console.log('Alguns Estados do Brasil:' );
    var brasil = sul.concat(sudeste);
    console.log(brasil);
    console.log("-----------------------------------");    

    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
    brasil.unshift('Acre'); 
    brasil.unshift('Amapá'); 
    brasil.unshift('Amazonas');
    console.log('Mais estados adicionados:' );
    console.log(brasil);
    console.log("-----------------------------------");    

    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
    console.log('Estado removido:' );
    console.log(brasil.shift());
    console.log("-----------------------------------");        

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    var newSul = brasil.slice(2, 5);

    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log('Estados do Sul do Brasil:' );
    console.log(newSul);
    console.log("-----------------------------------");        

    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log('Alguns Estados do Brasil:' );
    console.log(brasil);
    console.log("-----------------------------------");   

    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    var nordeste = ["Alagoas", "Bahia", "Ceará", "Maranhão", "Paraíba", "Piauí", "Pernambuco", "Rio Grande do Norte", "Sergipe" ];

    /*
    Mostre no console os estados do nordeste.
    */
    console.log('Estados do Nordeste:' );
    console.log(nordeste);
    console.log("-----------------------------------");  

    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
    var newSudeste = brasil.splice(5);

    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    brasil.splice(5, 0, nordeste[0], nordeste[1], nordeste[2], nordeste[3], nordeste[4], nordeste[5], nordeste[6], nordeste[7], nordeste[8]);

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log('Estados em "newSudeste":' );
    console.log(newSudeste);
    console.log("-----------------------------------");  

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log('Alguns estados do Brasil:' );
    console.log(brasil);
    console.log("-----------------------------------");   

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
    var newBrasil = []; 
    brasil.forEach(function(item, index) {
        newBrasil.push({
            id: index,
            estado: item
        });
    });

    /*
    Mostre o array `newBrasil` no console
    */
    console.log('newBrasil:' );
    console.log(newBrasil);
    console.log("-----------------------------------");   

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log('Todos os estados de `brasil` tem mais de 7 letras?' );
    var every = brasil.every(function(item){
        return item.length > 7;
    });
    console.log(every ? "Sim, todos os estados tem mais de 7 letras!" : "Nem todos os estados tem mais de 7 letras!");
    console.log("-----------------------------------");   

    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    console.log('Ceará está incluído em `brasil`?' );
    var some = brasil.some(function(item){
        return item === "Ceará";
    });
    console.log(some ? "Ceará está incluído!" : "Ceará não foi incluído :(");
    console.log("-----------------------------------");  

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    var map = newBrasil.map(function(item, index) {
        return {
            id: index + 1,
            estado: item.estado + " pertence ao Brasil."
        }
    });

    /*
    Mostre no console o array criado acima:
    */
    console.log('newBrasil agora com mais informações:' );
    console.log(map);
    console.log("-----------------------------------"); 

    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    var filter = map.filter(function(item) {
        return item.id % 2 === 0;
    });

    /*
    Mostre o array filtrado acima no console.
    */
    console.log('Estados com ID par:' );
    console.log(filter);
    console.log("-----------------------------------"); 

})();