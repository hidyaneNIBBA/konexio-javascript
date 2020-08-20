function passwordGen2() {
    var length = (6,15),
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
    for (var i = 0, n = charset.length; i <= length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}


console.log(passwordGen2(4))

// rajouter un if et un else error