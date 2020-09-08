function WordCount(str) {
    var x = str.split("x").join("");
    var o = str.split("o").join("");
    return x.length === o.length;
}
console.log(WordCount("xooox"));   
console.log(WordCount("xoxo")) 