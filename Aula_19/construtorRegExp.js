//O construtor RegExp() cria uma expressão regular tomando como base o que lhe é passado como parâmetro...
var regex = new RegExp('Gui')
console.log(regex)

console.log("----------------------------------------")

var firstName = "Guilherme"
console.log(firstName.match(regex))

console.log("----------------------------------------")

//Para usarmos o \w, \d, \s ou outras capturas precisamos escapar: \\d. \\w e etc
firstName = "Gui123lherme"
regex = new RegExp("\\d")
console.log(firstName.match(regex))

console.log("----------------------------------------")

//Vamos primeiro método deste construtor, que é o .test(string)...
//Se esse método encontrar a string buscada então retorna TRUE senão FALSE
console.log(regex.test(firstName))

console.log("----------------------------------------")

//Outro método dela é o .exec(string)...
//Ele retorna o caracere que bate com a string buscada, até que não haja mais correspondência, daí ele retorna NULL
regex = /\d/g
console.log(regex.exec(firstName))
console.log(regex.exec(firstName))
console.log(regex.exec(firstName))
console.log(regex.exec(firstName))

console.log("----------------------------------------")

//Caracteres especiais do Regex valem em string! (com excessão do \s)
console.log("\tOi... \n \tMeu nome é \"Guilherme\" \n \tMeu apelido é: \"Gui \" ")