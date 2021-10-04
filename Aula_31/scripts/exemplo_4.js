(function(){

  'use strict';

  /**
   *  Sempre que houver alguma tecnologia ou parte dela que queiramos consultar um bom site é o: devdocs.io
   *  Quanto ao objeto Date, podemos manipular nessa ordem: year, month, day, hour, min, sec, milliseconds.
   *  OBS: Se o dia passado extrapolar o mês, é retornado o próximo mês, se o mês ultrapassar os meses do ano a data é levada ao próximo ano.
  */

  var months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];

  var year = 2022;
  var month = months.indexOf('Dezembro'); // Jan - Dez = 0 - 11
  var day = 25;
  var hour = 23;
  var min = 59;
  var sec = 0;
  var milliseconds = 0;

  var date = new Date(year, month, day, hour, min, sec, milliseconds);
  console.log(date);

})();
