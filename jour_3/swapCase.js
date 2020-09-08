function swapCase(text) {
    return text.split('').map(function (str) {
        return str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    }).join('')
}

console.log(swapCase("Hello World"))

console.log(process.argv)

// Challenge 2
// Utiliser le process.argv pour créer un programme 
// qui récupère votre input et utilise cette fonction
// je n'ai pas vraiment compris l'utilité du challenge 2 ici



// var text = 'Hello World';

// var swap = text.split('').map(function swapcase(str){
//   return str === str.toUpperCase(); {
//   if (str.toLowerCase()) {
//   return str.toUpperCase();

// })

// .join('')}

// console.log(swap)
// console.log(process.argv)

