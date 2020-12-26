var num;
var randomNumber;
function numberInter(){
    num = document.userNumber.usrNumber.value;
    num = Math.trunc(num);
    console.log(num);
    if(num == 0){
        let q = document.getElementById('request');
        q.textContent = "you can't choose 0 as a number";

    }
    else{
        var clc = document.getElementById('nfkjf')
        clc.style='display=none';
        randomNumber = Math.trunc(Math.random()*10002);
        let q = document.getElementById('request');
        q.textContent = `Add to ${num} the number ${randomNumber}`
    }
    
}
function check(){
    var a = document.calcul.userresult.value;
    console.log(a);
    var result = num+randomNumber;
    var resultRed = document.getElementById('resultDeclaration');
    if(a == result){
        result.style='color:red;';
        resultRed.textContent=`this is the right number the result is ${result}`;
        result.style='color:green';
        var restart = document.getElementById('hdm');
        restart.style='display=none';

    }
    if(a != result){
        result.style='color:red;';
        resultRed.textContent=`this is the wrong number the result is ${result}`;
        var restart = document.getElementById('hdm');
        restart.style='display:none';

    }
}
function rets(){
    var kjsh_dn = window.confirm("voulez vous vraiment redemarer cette page ?");
if(kjsh_dn== true){
    window.location.reload();
}
else{
    console.log('0')
}
}
