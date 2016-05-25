$(document).ready(function(){
    
    // Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 240 && $(this).width() >= 751){
            $('header').addClass("header__sticky");
//            $('header').removeClass("header");
        }
        else{
            $('header').removeClass("header__sticky");
//            $('header').addClass("header");
        }
    });

    // Mobile hamb - open 
    $( ".header__cross" ).hide();
    
    $(".header__hamburger").on("click", function(){
        $(this).parent(".header__body").toggleClass("active");
        $( ".header__hamburger" ).hide();
        $( ".header__cross" ).show();
    });
    
    // Mobile hamb - close 
    $(".header__cross").on("click", function(){
        $(this).parent(".header__body").toggleClass("active");
        $( ".header__hamburger" ).show();
        $( ".header__cross" ).hide();
    });
    
    // Open submenu on mobile
    $(document).ready(function(){
        if (window.innerWidth <= 1024){
            $('.sub__first').click(function() {
                    $('.header__sub-first').slideToggle("slow").css('display','inline-block');
                    $(".sub__first .header__menu-link").toggleClass("active");
            });
        }
    });
});