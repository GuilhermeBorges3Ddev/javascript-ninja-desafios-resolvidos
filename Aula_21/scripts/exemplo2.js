(function(win) {
   'use strict';
    
    /**
     * Nesse caso mostra "Início" e "Depois", somente depois de um segundo ele executa o console do setTimemout()
     * Percebemos aqui que o setTimeout() é um método assíncrono do objeto window
    */
    console.log("Início");
    win.setTimeout(function(){
        console.log("executou o setTimout()");
    }, 1000);
    console.log("Fim");

    /**
     * Temos também um método que roda de X em X segundos, o setInterval() que é de execução contínua...
     * Ele só termina sua execução até que mandemos parar, saiamos da página ou a fechemos.
    */
    win.setInterval(function(){
        console.log("setInterval() foi colocado na event queue");
    },100)

    /**
     * Faremos o setTimeout() executar como o setInterval()
     * A diferença é que aqui criamos um critério de parada nessa execução temporal
    */
   var counter = 0;
   
   function timer() {
       console.log('timer', counter ++);
       if(counter > 10) return;
       setTimeout(timer, 1000);
   }

   timer();

})(window)