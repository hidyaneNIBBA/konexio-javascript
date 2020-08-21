// var text = 'Hello World';

// var ans = text.split('').map(function(c){
//   return c === c.toUpperCase()
//   ? c.toLowerCase()
//   : c.toUpperCase()
// }).join('')

// console.log(ans)
// console.log(process.argv)



// function swapCase(letters) {
//     return letters.replace( /\w/g, function(c) {
//       if (c === c.toLowerCase()) {
//         return c.toUpperCase();
//       } else {
//         return c.toLowerCase();
//       }
//     });
//   }




function swapCase(text) {
    return text.split('').map(function(str) {
        return str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    }).join('')
}

console.log(swapCase("Hello World"))

console.log(process.argv)



// var text = 'Hello World';

// var swap = text.split('').map(function swapcase(str){
//   return str === str.toUpperCase(); {
//   if (str.toLowerCase()) {
//   return str.toUpperCase();

// })

// .join('')}

// console.log(swap)
// console.log(process.argv)

