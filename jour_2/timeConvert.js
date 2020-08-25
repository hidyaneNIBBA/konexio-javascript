// corrigé du cours amélioré
function timeConvert(num) {
    var sec = num % 60;
    var min = Math.floor((num % 3600) / 60);
    var heures = Math.floor(num / 3600);

    return heures + ':' + min + ':' + sec;
}
console.log(timeConvert(4000))


// Ma méthode:
// function timeConvert(num) {
//     var reste = num;
//     var result = '';

//     var nbJours = Math.floor(reste / (3600 * 24));
//     reste -= nbJours * 24 * 3600;

//     var nbHours = Math.floor(reste / 3600);
//     reste -= nbHours * 3600;

//     var nbMinutes = Math.floor(reste / 60);
//     reste -= nbMinutes * 60;

//     var nbSeconds = reste;

//     if (nbJours > 0) {
//         result = result + nbJours + ' : ';
//     }
//     if (nbHours >= 0) {
//         result = result + nbHours + ' : ';
//     }
//     if (nbMinutes >= 0) {
//         result = result + nbMinutes + ' : ';
//     }
//     if (nbSeconds >= 0) {
//         result = result + nbSeconds + ' ';
//     }
//     return result;
// }
// console.log(timeConvert(3800))
// console.log(timeConvert(126))
// console.log(timeConvert(3700))