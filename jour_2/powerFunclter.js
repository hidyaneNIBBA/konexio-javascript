function powerFunclter(num,power) {
    var result = 1;
    for (var i = 0; i < power; i++){
        result *= num;
    }
    return result;
}
console.log(powerFunclter(2, 5))

// corrigé du cours:
// var numBase = 2;
// var puissance = 5;

// function powerFuncIter(num, power) {
//   var result = 1;

//   for (var i = 0; i < power; i++) {
//     //result = result * num; C'est pareil que la ligne en dessous
//     result *= num;
//   }

//   return result;
// }

// //console.log(powerFuncIter(2, 5)); En envoyant des valeurs
// console.log(powerFuncIter(numBase, puissance)); // En envoyant des variables