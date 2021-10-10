(function() {

  'use strict';

  /**
   *  Existe um método estático do objeto Date(que não precisa ser instanciado), o now().
   *  O retorno desse método acima é a quantidade de milisegundos de 01/01/1970 00:00 até hoje.
   *  Temos outros métodos não estáticos como:
   *  getDate()  = 0 - 31
   *  getDay() = 0 - 6
   *  getFullYear() = 2021
   *  getYear() = 121 (0 para 1900, 99 para 1999 e assim sucessivamente)
   *  getHours() =  0 - 23
   *  getMilliseconds() = 0 - 999
   *  getMinutes() = 0 - 59
   *  getMonth() = 0 - 11
   *  getSeconds() = 0 - 59
   *  getTime() - ms desde 01/01/1970 0:00:00 UTC
  */

  console.log(Date.now());
  console.log("-----------------");

  console.log(Date.now()/1000/60/60/24/365); //Quantidade de anos passados do início da UTC até agora
  console.log("-----------------");

  var date = new Date();
  console.log(date.getDate());
  console.log(date.getDay());
  console.log(date.getFullYear());
  console.log(date.getHours());
  console.log("-----------------");

  console.log(
    date.getDate() + "/" +
    (date.getMonth() + 1) + "/" +
    date.getFullYear() + " " +
    date.getHours() + ":" +
    date.getMinutes() + ":" +
    date.getSeconds() + "::" +
    date.getMilliseconds() + " UTC"
  );

})();
