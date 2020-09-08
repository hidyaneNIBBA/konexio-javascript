console.log(process.argv);
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
console.log(process.argv[2] + process.argv[2]);
console.log(parseInt(process.argv[2]) + parseInt(process.argv[2]));