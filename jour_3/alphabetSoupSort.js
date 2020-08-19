// var str;
// function strSort(str) {
//     return str.sort(function(x,y) {
//       return x.toString().localeCompare(y.toString());
//     });
//   }
//   console.log(strSort("hello"))

  var str;
function alphabetSoup(str) {
    var tableauStr = str.split("");

   
    for(var i = 0; i<=tableauStr.length; i++ ){   


        if(str[i] > str[i+1]){    
            var swap = str[i];
            str[i] = str[i+1];
            str[i+1] = swap;

        }
    }
    return ;
}
console.log(alphabetSoup("hello"));