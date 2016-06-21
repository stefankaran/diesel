$(document).ready(function(){
    
    //----- Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250 && $(this).width() >= 751){
            $('header').addClass("header__sticky");
            $('main').addClass("header__sticky-active");
        }
        else{
            $('header').removeClass("header__sticky");
            $('main').removeClass("header__sticky-active");
        }
    });

    //----- Mobile hamb - open
    
    $(".header__hamburger").on("click", function(){
        $(this).parent(".header__body").toggleClass("active");
        $( ".header__hamburger" ).hide();
        $( ".header__cross:after", ".header__cross:before").css('visibility', 'visible');
    });
    
    //----- Mobile hamb - close 
    $(".header__cross").on("click", function(){
        $(this).parent(".header__body").toggleClass("active");
        $( ".header__hamburger" ).show();
        $( ".header__cross:after", ".header__cross:before").css('visibility', 'vidden');
    });
    
    //----- Open submenu on Mobile and Tablet.
        //----- Link open on the second click
    $(document).ready(function(){
        if (window.innerWidth <= 1024){
            $('.sub__first').click(function(e) {
                if(!$(this).parent().hasClass('active')) {
                    $('.sub__first').removeClass('active');
                    $(this).parent().addClass('active');
                    $(".sub__first .header__menu-link").toggleClass("active");
                    e.preventDefault();
                }
                else {
                    return true;
                }
            });
        }
        else {
            $('.sub__first').hover(function() {
                    $('.header__sub-first').slideToggle("fast").addClass('active');
                    $(".sub__first .header__menu-link").toggleClass("active");
            });
        }
    });
    
    //----- Close a Dropdown menu when you click somewhere in the page
//    $(document).click(function (e) {
//        var container = $(".sub__first");
//        if (!container.is(e.target) && container.has(e.target).length === 0) {
//                $('.header__sub').hide();
//                $(".sub__first .header__menu-link").removeClass("active");
//        }
//    });
    
    //----- Sticky share on single pages
        //----- On Tablet and Desktop
    if ($(this).width() > 750){
        var stickyElements = document.getElementsByClassName('sticky');
            for (var i = stickyElements.length - 1; i >= 0; i--) {  
                Stickyfill.add(stickyElements[i]);
            }
    }
        //----- On Mobile
    if($('body').hasClass("page-articleSingle")){
        var $elTags = $(".related");
        var tagTop = $elTags.offset().top;
        var tagBottom = $elTags.offset().top + $elTags.outerHeight(true);

        var $sticky = $("#sticky");
        if($(this).width() <= 750) {
            $sticky.css('display', 'none');
            $(".articleSingle__shareLink").hide();
            $(window).scroll(function(){
                if($(this).scrollTop() > 200 && $(this).scrollTop() < tagTop) {
                    $sticky.css('display', 'block').addClass("mobShareSticky");
                    $(".articleSingle__shareLink").delay(1300).fadeIn(100);
                }
                else {
                    $sticky.css('display', 'none');
                    $(".articleSingle__shareLink").hide();
                }
            });
        }
    }
    
//    // Hide the div
//    $(".articleSingle__shareLink").hide();
//    // Show the div in 5s
//    $(".articleSingle__shareLink").delay(1300).fadeIn(100);
    

        //----- On Mobile
//    $(window).scroll(function() {
//        if ($(this).scrollTop() > 125 && $(this).width() <= 750){
//            $('.stickyFist').fadeIn('fast');
//        }
//        else {
//            $('.stickyFist').fadeOut('fast');
//        }
//    });
    
    //----- Slider
    if ($("body").hasClass("page-homepage")){
        //----- Slider with images
        $('.slider__slides').slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider__block',
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: false, //----- Disable Prev/Next arrow on first/last slide
            focusOnSelect: true,
        });

            //----- Slider with description
        $('.slider__block').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.slider__slides',
            infinite: false, //----- Disable Prev/Next arrow on first/last slide
            dots: true,
            fade: true,
            speed: 0,
        });
    }
});