(function (doc) {

  'use strict';

  /**
   *  Uma das maneiras de manipularmos CSS de um Html via JS é usando diretamente element.style.
   *  Outra maneira seria pelo próprio método 'element.setAttribute('style', estilos...)'.
   *  Essas 2 maneiras vistas acima não são muito eficazes, pois geram inline CSS.
   *  Para modificarmos via classe então teremos que usar o 'element.classList', que é um getter e setter.
   *  Para setarmos temos 4 propriedades de classList: add, remove, toggle, contains
  */

  var $div = doc.querySelector('div');
  // $div.style = 'width: 250px; heigth: 250px; border: 1px solid black; background: #fc0;';
  // $div.setAttribute('style','width: 250px; height: 250px; border: 1px solid black; background: #fc0;');

  console.log($div.classList);

  console.log("-----------------");

  console.log($div.classList.contains('red'));

  console.log("-----------------");

  $div.classList.add('blue');

  $div.addEventListener('click', function(){
    this.classList.toggle('blue');
  }, false);

})(document);
