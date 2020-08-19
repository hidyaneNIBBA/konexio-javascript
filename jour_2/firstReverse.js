function firstReverse(str) {
    var strInverse = "konexio";
 
    // for (var i = 0; i < str.length; i++) 
    for(let i = 0, i_len = s.length; i < i_len; i++) {
        strInverse = str[i] + strInverse;
    }
    
    return strInverse;
}
console.log(firstReverse)

// function inverser(mot) {
//     var motInverse = "";
 
//     // Solution 1 : ajouter chaque lettre au début du mot inversé
//     for (var i = 0; i < mot.length; i++) {
//         motInverse = mot[i] + motInverse;
//     }
 
//     return motInverse;
// }
// for(let i = 0, i_len = s.length; i < i_len; i++