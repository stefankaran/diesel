$(document).ready(function(){
    
    //----- Sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250 && $(this).width() >= 751){
            $('header').addClass("header__sticky");
            $('main').addClass("header__sticky-active");
            if ($('.header__menu-row').hasClass('active')) {
                $('.header__menu-row').removeClass('active');
                $('.sub__first .header__menu-link').removeClass('active');
            }
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
        var menuRow = $('.header__menu-row');
        var subFirst = $('.sub__first');
        var activeLink = $('.sub__first .header__menu-link');
        var headerSubFirst = $('.header__sub-first');
        var act = ('active');
        
        if (window.innerWidth <= 1024){
            $(subFirst).click(function(e){
                if(!$(menuRow).hasClass(act)) {
                    $(menuRow).addClass(act);
                    $(activeLink).addClass(act);
                    e.preventDefault();
                }
                //----- Close a Dropdown menu when click somewhere in the page
                $(document).click(function (r) {
                    if (!subFirst.is(r.target) && subFirst.has(r.target).length === 0) {
                            $(menuRow).removeClass(act);
                            $(activeLink).removeClass(act);
                    }
                });
            });
        }
        else {
            $(subFirst).hover(function() {
                    $(headerSubFirst).slideToggle("fast").addClass(act);
                    $(activeLink).toggleClass(act);
            });
        };
    });
    
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
            infinite: false,
            dots: true,
            fade: true,
            speed: 0,
        });
    }
});