(function(){
    
    'use strict';
    
    /**
     * Array-like(arguments, Nodelists e etc) como Arrays
     * Array.prototype.forEach.call()
     * Array.prototype.forEach.apply()
    */

    function myFunction() {
        Array.prototype.forEach.call(arguments, function(item) {
            console.log(item);
        })
        console.log("-------------------");
        var result = Array.prototype.reduce.call(arguments, function(ac, actual){
            return (ac + actual)
        })
        console.log(result);
    }

    function myFunction2() {
        Array.prototype.forEach.apply(arguments, [function(item) {
            console.log(item);
        }])
    }

    myFunction(1, 2, 3, 4, 5, 6, 7, 8);

    console.log("-------------------");

    myFunction2(1, 2, 3, 4, 5);

}());