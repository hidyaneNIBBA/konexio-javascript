var firstInput = 25;
var secondInput = 30;

function swap(first, second) {
    var third = null;

    third = first;

    first = second;

    second = third;

    return [first, second];
}

console.log(swap(firstInput, secondInput));