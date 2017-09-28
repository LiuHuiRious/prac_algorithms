const readLine = require('readline');

var r1 =readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.on('line', line => {
    startFn(line);
})

function startFn(num){
    var number = parseInt(num);
    var str = '';
    while(number > 0){
        if(number%2 === 0){
            number = (number-2)/2;
            str = 2 + str;
        }
        else {
            number = (number-1)/2;
            str = 1 + str;
        }
    }
    console.log(str);
}
