function checkNums(num1, num2) {

    if (num1 > num2) {
        return 'num1 is greater than num2';
    }
    else if (num1 < num2) {
        return 'num1 is lower than num2';
    }
    else {
        return 'equal';
    }
}
console.log(checkNums(3, 122));
console.log(checkNums(5, 2));
console.log(checkNums(67, 67));
