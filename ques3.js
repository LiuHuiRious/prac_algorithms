const readLine = require('readline');

var r1 =readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.on('line', line => {
    calculate(line);
})

function calculate(str){
    if(str){
        var strArr = str.split('');
        var item = strArr[0];
        var count = 1;

        for(var i=1; i<strArr.length; i++){
            if(strArr[i] != item){
                item = strArr[i];
                count ++;
            }
        }
        var result = (strArr.length/count).toFixed(2);
        console.log(result);
    }
}