$(document).ready(function(){
    $( ".cross" ).hide();
    $( ".header__body-mobile" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".header__body-mobile" ).fadeToggle( "fast", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".header__body-mobile" ).fadeToggle( "fast", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
    });
    
//    $(window).scroll(function() {
//        if ($(this).scrollTop() > 1){
//            $('header').addClass("header__sticky");
//            $('header').removeClass("header");
//        }
//        else{
//            $('header').removeClass("header__sticky");
//            $('header').addClass("header");
//        }
//    });
});