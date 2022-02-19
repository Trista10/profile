var boxB = document.getElementById("pure-formB").getElementsByTagName("input");
var sumB = 0;

function testB(){
    for(var i=0;i<boxB.length;i++){
        if(boxB[i].checked){
            sumB += parseInt(boxB[i].value,10);
        }
    };
    if(sumB >= 19 && sumB <= 32){
        window.open("https://trista10.github.io/profile01/profile01/lion.html");
        // window.location("https://trista10.github.io/profile01/profile01/lion.html"); GITHUB無法使用
    }else if(sumB >= 33 && sumB <= 47){
        window.open("https://trista10.github.io/profile01/profile01/beer.html");
        // window.location("https://trista10.github.io/profile01/profile01/beer.html"); GITHUB無法使用
    }else if(sumB >= 48 && sumB <= 61){
        window.open("https://trista10.github.io/profile01/profile01/wolf.html");
        // window.location("https://trista10.github.io/profile01/profile01/wolf.html"); GITHUB無法使用
    }else{
        alert("請填寫完整才能透過測驗得知您的類型唷！");
    }
}
