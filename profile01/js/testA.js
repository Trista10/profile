var boxs = document.getElementById("pure-formA").getElementsByTagName("input");
var sum = 0;

function testA(){
    for(var i=0;i<boxs.length;i++){
        if(boxs[i].checked){
            sum += parseInt(boxs[i].value,10);
        }
    };
    if(sum >=7){
        window.open("https://trista10.github.io/profile01/profile01/dolphin.html");
        // window.location("https://trista10.github.io/profile01/profile01/dolphin.html"); GITHUB無法使用
    }else if( sum >0 && sum <7){
        window.open("https://trista10.github.io/profile01/profile01/testB.html");
        // window.location("https://trista10.github.io/profile01/profile01/testB.html"); GITHUB無法使用
    }else if(sum < 1){
        alert("請勾選符合您的敘述");
    }else{
        alert("發生錯誤");
    }
}


