(function(){
    'use strict';

    console.log('Início');
    
    /**
     * Ao rodar esse script percebemos o for() como um método síncrono...
     * O problema é que a thread fica bloqueada até que a última instrução seja executada
     */
    for (var i = 0; i <= 10000; i++) {
        console.log(i);
    }
    
    console.log('fim');
    
    /**
     * Esse evento será lançado na event queue, porque o for() está em execução...
     * Logo esse evento será executado/criado apenas após o "fim"
     */
     document.addEventListener('click', function() {
        console.log("clicou no documento")
    }, false)

})();