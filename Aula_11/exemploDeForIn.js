var car = {
    brand: "VW",
    model: "Gol",
    year: 2013
};

console.log(car);

for(var prop in car){ 
    console.log(car[prop]);
}

console.log('year is a property of car?', 'year' in car);