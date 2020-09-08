function vowelCount(str) {
  var voyelles = 'aeiouy';
  var compteur = 0
  for (var i = 0; i < str.length; i++) {
    if (voyelles.includes(str[i])) {
      compteur = compteur + 1
    }
  }
  return compteur
}
console.log(vowelCount('aeiouy'))
console.log(vowelCount('hello'))

// deuxième solution:
// function vowelCount(str) {
//   var voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
//   var compteur = 0
//   for (var i = 0; i < str.length; i++) {
//       for (var j = 0; j < voyelles.length; j++) {
//           if (str[i] === voyelles[j]) {
//               compteur = compteur + 1
//           }
//       }
//   }
//   return compteur
// }

// console.log(vowelCount('aeyiuo'))