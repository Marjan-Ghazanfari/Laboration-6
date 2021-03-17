let names = ['Marjan', 'Sara', 'Mina', 'Ida', 'Martin'];

console.log(`Array med 5 oliks namn i: ${names}`);

names.pop();
console.log(`Martin togs bort: ${names}`);

names [1] = 'Åsa';
console.log(`Plats 2 ändrats: ${names}`);

names.unshift('Joakim');
console.log(`Joakim läggs till: ${names}`);

names.sort();
console.log(`Sorterats i bokstavsordning: ${names}`);

console.log(`Index of Joakim: ${names.indexOf('Joakim')}`);

names.splice(names.indexOf('Joakim'), 1);
console.log(`Joakim togs bort: ${names}`);

for (i=0; i<names.length; i++) {
    console.log(`names[${i}] är ${names[i]}`);
}

// for (name of names){
//     console.log(name);
// }