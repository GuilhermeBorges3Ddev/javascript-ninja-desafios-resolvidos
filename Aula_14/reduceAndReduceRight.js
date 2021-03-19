var arrStr = ['G', 'U', 'I', 'L', 'H', 'E', 'R', 'M', 'E'];
var arr = [1, 2, 3, 4, 5]

var reduce = arr.reduce(function(acumulado, atual, index, arr) {
    return acumulado + atual;
},0);

var reduceRight = arrStr.reduceRight(function(acumulado, atual, index, arr) {
    console.log(index + ' - ' + atual + ' - ' + acumulado);
    return acumulado + atual;
});

/*  
    1 iteracao = 0 + 1 = 1
    2 iteracao = 1 + 2 = 3
    3 iteracao = 3 + 3 = 6
    4 iteracao = 6 + 4 = 10
    5 iteracao = 10 + 5 = 15
*/

console.log(reduce);
console.log("----");
console.log(reduceRight);