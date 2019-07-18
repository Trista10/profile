// 手機 menu向下展開
// $(document).ready(function() {
//     $('.l-nav__showBtn').on('click',  function(e){
//     e.preventDefault();
//     $('.l-nav__link').toggleClass('l-link__showMenu');
//     });
// });


// gototop 捲軸回上方
$(document).ready(function() {
    // 控制回top速度
    $('.gototop').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    // 判斷捲軸高度大於70px，則顯示gototop按鈕，反之移除
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 70 ){
            $('.gototop').fadeIn(222);
        } else {
            $('.gototop').stop().fadeOut(222);
        }
    }).scroll();

});

