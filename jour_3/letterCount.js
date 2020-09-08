// pour calculer le nombre de lettres

// function wordCount(str) {
 
//     var mot = 'search';
//     var compteur = 0
//     for (var i = 0; i < str.length; i++) {
//         if (mot.includes(str[i])) {
//             compteur = compteur + 1
//         }
//     }
//     return compteur
// }
// console.log(wordCount('search'))




//trouver le nombre de fois que la lettre i a été utilisée
function letterCount(str, search) {
 
    var mot = 'Hello apple pie';
    var compteur = 0
    for (var i = 0; i < str.length; i++) {
        if (mot.includes(str[i])) {
            compteur = compteur + 1
        }
    }
    return compteur
}
console.log(letterCount('i'))
console.log(letterCount('w'))
