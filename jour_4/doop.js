// solution1
var nb1 = parseInt(process.argv[2])
var nb2 = parseInt(process.argv[4])
var op = process.argv[3]

if (process.argv.length !== 5) {
    console.log('error')
    return;
}

var opObj = {
    '+': function(chiffre1, chiffre2) {
        return chiffre1 + chiffre2
    },
    '-': function(chiffre1, chiffre2) {
        return chiffre1 - chiffre2
    },
    '/': function(chiffre1, chiffre2) {
        return chiffre1 / chiffre2
    },
    '%': function(chiffre1, chiffre2) {
        return chiffre1 % chiffre2
    },
    '*': function(chiffre1, chiffre2) {
        return chiffre1 * chiffre2
    }
}

console.log(opObj[op](nb1, nb2))
// fonctionne correctement, ne pas oublier de 
// mettre les "" autour du signe de calcul

// ---------------------------------------------------

//  // solution2
// var nb1 = parseInt(process.argv[2])
// var nb2 = parseInt(process.argv[4])
// var op = process.argv[3]

// var result;

// if (op === '+') {
//     result = nb1 + nb2;
// } else if (op === '-') {
//     result = nb1 - nb2;
// } else if (op === '*') {
//     result = nb1 * nb2;
// } else if (op === '/') {
//     result = nb1 / nb2;
// } else if (op === '%') {
//     result = nb1 % nb2;
// } else {
//     console.log('aucune operations trouvé')
// }

// console.log(result)
// // node doop.js 1 "+"" 6 "+" 7 
// // nous calcule que les 2 premiers nombre
// // et 1 "+" 6 retourne bien le résultat de l'addition(parseInt)

// ---------------------------------------------------------------

// // solution3 
// var nb1 = parseInt(process.argv[2])
// var nb2 = parseInt(process.argv[4])
// var op = process.argv[3]

// var result;

// switch (op) {
//     case '+':
//         result = nb1 + nb2;
//         break;
//     case '-':
//         result = nb1 - nb2;
//         break;
//     case '/':
//         result = nb1 / nb2;
//         break;
//     case '*':
//         result = nb1 * nb2;
//         break;
//     case '%':
//         result = nb1 % nb2;
//         break;
//     default:
//         console.log('aucune operations trouvé')
// }

// console.log(result)
// // node doop.js 1 "+"" 6 "+" 7 
// // nous calcule que les 2 premiers nombre
// // et 1 "+" 6 retourne bien le résultat de l'addition(parseInt)