function firstFactorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result = result * i;
        // ou  result *= i; pk mettre le = sur cette
        //  ligne alors que ça fonctionne sans
    }
    return result;
}
console.log(firstFactorial(4))
console.log(firstFactorial(8))

//Façon n2:
 // for (var i = num; i > 0; i--) {
    //     result *= i;
    // }
