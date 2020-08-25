// var test = "bring your umbrella";
// function strUcFirst(a){return (a+'').charAt(0).toUpperCase()+a.substr(1);}

// strUcFirst('test');
// console.log(test) 
// // méthode UcFirst à peaufiner




function letterCapitalize(sentence) {
    var arraySentence = sentence.split(' ');
    var result = [];
    var firstMayus = '';
    var restOfWord = '';

    for (var i = 0; i <= arraySentence.length - 1; i++) {

        firstMayus = arraySentence[i].substr(0, 1).toUpperCase();
        restOfWord = arraySentence[i].substr(1, arraySentence[i].length);

        result.push(firstMayus + restOfWord);
    }

    return result.join(' ');
}

console.log(letterCapitalize('what a wonderful world'));
console.log(letterCapitalize('bring your umbrella'));
console.log(letterCapitalize('sweet like honey green like money'));



// function letterCapitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
  
//   console.log(letterCapitalize('what a wonderful world'));
// //   ne fonctionne que pour le premier mot de la phrase



