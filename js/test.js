

// if 設定值累積 >=7，則跳到dolphin.html，否則到testB.html

var boxs = document.getElementById("pure-formA").getElementsByTagName("input");
var sum = 0;

function testA(){
    for(var i=0;i<boxs.length;i++){
        if(boxs[i].checked){
            sum += parseInt(boxs[i].value,10);
        }
    };
    if(sum >=7){
        window.open("https://trista10.github.io/profile/dolphin.html");
        // alert("大於>7");
    }else{
        window.open("https://trista10.github.io/profile/testB.html");
        // alert("小於<7");
    }
}


var boxB = document.getElementById("pure-formB").getElementsByTagName("input");
var sumB = 0;

function testB(){
    for(var i=0;i<boxB.length;i++){
        if(boxB[i].checked){
            sumB += parseInt(boxB[i].value,10);
        }
    };
    if(sumB >= 19 && sumB <= 32){
        window.open("https://trista10.github.io/profile/lion.html");
    }else if(sumB >= 33 && sumB <= 47){
        window.open("https://trista10.github.io/profile/beer.html");
    }else if(sumB >= 48 && sumB <= 61){
        window.open("https://trista10.github.io/profile/wolf.html");
    }else{
        alert("請填寫完整才能透過測驗得知您的類型唷！");
    }
}