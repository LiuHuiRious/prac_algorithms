const readLine = require('readline');

var r1 =readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.on('line', line => {
    oppositeNum(line);
})

function oppositeNum(str){
    var preNum = parseInt(str);
    var oppoStr = reverseStr(str);
    oppoStr = clearZero(oppoStr);

    var  reverseNum = parseInt(oppoStr);

    var oppoNum = preNum + reverseNum;
    console.log(oppoNum)
}

function clearZero(str){
    var newStr = ''
    for(var i = 0; i<str.length; i++){
        if(str[i] == 0){
            str[i].replace('')
        }
        else break;
    }
    return str
}
function reverseStr(str){
    var newStr = '';
    for(var i =str.length-1; i>=0; i--){
        newStr += str[i];
    }
    return newStr;
}