/*헤더 메뉴*/

$('.header_menu_list>li').mouseover(function(){
       $(this).find('.sub_menu_list').slideDown();
   });
   $('.sub_menu_list').mouseleave(function(){
       $('.sub_menu_list').slideUp();
   });
    $('.header_menu_list>li').mouseleave(function(){
        $('.sub_menu_list').slideUp();
    })



/*이미지 슬라이드(큰화면)*/


$('.img_list li').last().prependTo(".img_list");
$('.img_list').css("left",-1200);

setInterval(function(){
    $('.img_list').animate({left:'-=1200'},'slow',function(){
        $('.img_list li').first().appendTo('.img_list');
        $('.img_list').css("left",-1200);
    })
    
},10000);



$('.right').click(function(){
     $('.img_list').animate({left:'-=1200'},'slow',function(){
        $('.img_list li').first().appendTo('.img_list');
        $('.img_list').css("left",-1200);
    })
  
})

$('.left').click(function(){
    
     $('.img_list').animate({left:'+=1200'},'slow',function(){
        $('.img_list li').last().prependTo('.img_list');
        $('.img_list').css("left",-1200);
    
     })
})


/*키스해링 작품*/

var count = $('.sub_list li').size() -1;
var current=0;

$('.sub_list_second li').click(function(){
    
    $(this).children('img').addClass('big');
    $(this).siblings().children().removeClass();
    
    var change = $(this).children('img').attr('src');
    $('.main').children('img').attr('src', change);
    
    
    var bg_color=$(this).css('background-color');
    $('.main').css('background-color',bg_color);
    
    
    var first_txt = $(this).children('p').text();
    $('.third_title').text(first_txt);
    
    
    var txt=$(this).children('h2').text();
    $('.second_title').text(txt);
    
    
    
    current= $(this).index();
    
    $(this).css('border','3px solid rgba(255,255,0,0.5)');
    $(this).siblings().css('border',"");
    
});

$('.sub_list_second li').eq(0).click();






