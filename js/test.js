

// if 設定值累積 >=7，則跳到dolphin.html，否則到testB.html

var boxs = document.getElementById("pure-formA").getElementsByTagName("input");
var sum = 0;

for(var i=0;i<boxs.length;i++){
    if(boxs[i].checked){
        sum += parseInt(boxs[i].value,10);
    }
}

function testA(){
    if(sum >=7 ){
        window.open("http://www.google.com");
    }else{
        window.open("http://www.yahoo.com.tw");
    }
}



// function aaa (){
//     if( 3 == 6/3){
//         alert("aaa測試成功");
//     }else{
//         window.location.assign("HTTP://www.google.com");
//     }
    
// }


