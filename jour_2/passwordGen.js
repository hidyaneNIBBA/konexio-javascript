function passwordGen(num) {
    var min = 65;
    var max = 90;
    var password = '';

    if (num > 15){
        return 'error'
    }
    if (num < 6) {
        return 'error'
    }
for (var i = 0; i < num; i++) {
    var index = Math.floor((Math.random() * (max -min) + min));
    password = password + String.fromCharCode(index);
}
return password;
}
console.log(passwordGen(8))
console.log(passwordGen(4))

