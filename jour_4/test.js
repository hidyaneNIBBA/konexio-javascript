// Créer un array vide
// Faire une boucle jusqu’a 5 et pour chaque
// tour de boucle on rajoute une valeur aleatoire entre 0 et 7
// Afficher l’array

var array = [];
var num = 5;
for (var i = 0; i < num; i++) {
    array.push(Math.floor(Math.random() * 7))
};
console.log(array)

// ---------------------------------------------------


var array = [];
var num = 5;
for (var i = 0; i < num; i++) {
    array.push(Math.floor(Math.random() * (7 - 2)) + 2)
};
console.log(array)

// -------------------------------------------------------------

var array = [];
var num = 5;
var max = 7;
var min = 2;
for (var i = 0; i < num; i++) {
    array.push(Math.floor((Math.random() * (max - min)) + min))
};
console.log(array)
