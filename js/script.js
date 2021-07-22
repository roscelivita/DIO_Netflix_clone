$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:false,
    margin:10   ,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$(window).scroll(function(){
    if ($(this).scrollTop() > 100){
        $('header').removeClass("hearder-background");
        $('header').addClass("menu-scroll");
    }
    if($(this).scrollTop() <=10){
        $('header').removeClass("menu-scroll");
        $('header').addClass("hearder-background");
        
    }
})