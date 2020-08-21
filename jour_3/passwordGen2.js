// function passwordGen2() {
//     var length = (6,15),
//         charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//         retVal = "";
//     for (var i = 0, n = charset.length; i <= length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }


// console.log(passwordGen2(4))

// rajouter un if et un else error
// si je tape une valeur entre 6 et 14
// alors random de A-Z
//  else error




// function passwordGen2(num) {
//     var min = 6;
//     var max = 15;
//     var password = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//     if (num > 15) {
//         return 'error';
//     }
//     if (num < 6) {
//         return 'error';
//     }
// ​
//     for (var i = 0; i < num; i++) {
//         var index = Math.floor((Math.random() * (max - min) + min));
//         password = password + String.fromCharCode(index);
//     }
    
//     return password;
// }
// ​
// ​
// console.log(passwordGen2(5));




function passwordGen2(num) {
    var min = 6;
    var max = 15;
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
        if (num > 15) {
             return 'error';
                }
        if (num < 6) {
             return 'error';
                }

    for (var i = 0; i < num; i++) {
        var n = charset.length;
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


console.log(passwordGen2(12))