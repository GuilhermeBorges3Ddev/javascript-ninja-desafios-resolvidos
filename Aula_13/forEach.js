var arr = [1, 2, 3, 4, 5, 6, 7];

console.log("IMPRIMINDO ITEM INDICE E ARRAY ---- COM FOREACH");

arr.forEach(function(item, index, arr) {
    console.log(item + " " + index + " " + arr)
})

console.log("----------------------------");

console.log("IMPRIMINDO ITEM INDICE E ARRAY ---- COM FOR");

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i] + " " + i + " " + arr);
}