function simpleAdding(num) {
    var result = 0;
    for (var i = 1; i <= num; i++) {
        result = result + i;
    }
    return result;
}

console.log(simpleAdding(12));
console.log(simpleAdding(140));
console.log(simpleAdding(5));