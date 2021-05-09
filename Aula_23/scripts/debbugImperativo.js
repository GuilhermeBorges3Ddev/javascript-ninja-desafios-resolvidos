(function(){

  'use strict';

  /**
   *  Lembrando que um código imperativo é todo aquele que deixa nossa thread bloqueada na execução.
   *  Com o console.time() conseguimos depurar o tempo de execução que vem depois da instrução.
   *  O ideal é que usemos com o time() o console.timeEnd(), pra que possamos mensurar melhor casos assíncronos.
   *
   *  Além dos métodos time() e timeEnd() do console nós temos o table(), que tabela propriedades iguais.
   *  O table() serve tanto para arrays de objetos quanto para objetos puros.
  */

  // console.time('Calculando o tempo do for()');
  // for(var i = 0; i < 10000; i++){
  //   console.log('calculando... ');
  // }
  // console.timeEnd('Calculando o tempo do for()');

  var arr = [
    {item: 'Arroz', price: 'R$ 10,00', weight: '1kg'},
    {item: 'Feijão', price: 'R$ 20,00', weight: '2kg'},
    {item: 'Macarrão', price: 'R$ 12,00', weight: '1.5kg'},
    {item: 'Carne', price: 'R$ 30,00', weight: '10kg'},
  ];

  console.table(arr);

})();
