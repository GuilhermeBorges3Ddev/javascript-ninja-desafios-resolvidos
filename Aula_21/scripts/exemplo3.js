(function(win, doc){
    'use strict';
    
   /**
     * Fazendo o mesmo exemplo com "counter" do exemplo2.js, vide excerto comentado abaixo:
     * A diferença é que faremos com setInterval();
     * Ele por sí só é recursivo, nada garante que as execuções anteriores sejam concluídas.
     * O setTimeout() é preemptivo e só lança no event loop na próxima execução se a anterior for concluída. 
   */

    //var counter = 0;

    //function timer() {
    //     counter++;
    //     console.log('timer', counter);
    //     if(counter > 10) return;
    //}

    //win.setInterval(timer, 1000);

    /**
     * Vamos usar agora um dos dois métodos de parada para essas funçôes:
     * clearInterval(id) -> Lembrando que os ID's aqui são das funções executadas
     * clearTimeout(id)
    */
   
     var counter = 0;
     var $button = doc.querySelector('[data-js="button"]');
     var temporizador;

     function timer() {
         console.log('timer', counter ++);
     }

     temporizador = setInterval(timer, 1000);
     console.log(temporizador);
  
     timer();

     $button.addEventListener('click', function() {
        win.clearTimeout(temporizador);
     })


}(window, document));