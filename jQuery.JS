$(function(){

alert('jQuery is ready.')


 $(window).scroll(function(){
     if($(this).scrollTop() > 570 && $(this).scrollTop() < 1700){
        $('.header-right ul li').eq(0).addClass('current');
     }  else{
         $('.header-right ul li').eq(0).removeClass('current');
     }
     if($(this).scrollTop() > 1700 && $(this).scrollTop() < 2470){
        $('.header-right ul li').eq(1).addClass('current');
     }  else{
         $('.header-right ul li').eq(1).removeClass('current');
     }
     if($(this).scrollTop() > 2470 && $(this).scrollTop() < 3100){
        $('.header-right ul li').eq(2).addClass('current');
     }  else{
         $('.header-right ul li').eq(2).removeClass('current');
     }
     if($(this).scrollTop() > 3100 && $(this).scrollTop() < 4000){
        $('.header-right ul li').eq(3).addClass('current');
     }  else{
         $('.header-right ul li').eq(3).removeClass('current');
     }
     if($(this).scrollTop() > 4000 && $(this).scrollTop() < 5500){
        $('.header-right ul li').eq(4).addClass('current');
     }  else{
         $('.header-right ul li').eq(4).removeClass('current');
     }
     


     return 0;
     

 });

 var mySwiper = new Swiper('.swiper-container',{
     navigation: {
         nextE1:'.swiper-button-next',
         nextE2:'.swiper-button-prev'
     },
     pagination: {
      el:'.swiper-pagination',
      type:'bullets',
     },
 });


 var pagetop = $('#page_top');
    pagetop.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            pagetop.fadeIn();
        } else {
        pagetop.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
  
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });



 
    








});
