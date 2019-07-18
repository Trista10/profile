

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
    }else if( sum <7){
        window.open("https://trista10.github.io/profile/testB.html");
        // alert("小於<7");
    }else if( sum == 0){
        alert("請勾選符合您的敘述");
    }else {
        alert("發生錯誤");
    }
}


