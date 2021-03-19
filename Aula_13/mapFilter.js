var arr = [1, 2, 3, 4, 5];

// Lembrando que o map() retorna nativamente um array

var map = arr.map(function(item, index, arr) {
    return item + 10;
})

console.log("----------------------------");

console.log("IMPRIMINDO O ARRAY MODIFICADO POR MAP E O ANTIGO ARRAY:");

console.log(arr + " - " + map);

console.log("----------------------------");

console.log("ENCADEANDO O RETORNO DO MAP COM O FILTER LOGO ABAIXO: ");

var filter = map.filter(function(item, index, arr){
    return item > 13;
});

console.log(filter);