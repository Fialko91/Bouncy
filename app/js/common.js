$(function() {

//    tab_about
    $(function () {
        $(".tab_item").not(":first").hide();
        $(".tabs_wrapper .tabs_item").click(function() {
            $(".tabs_wrapper .tabs_item").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_item").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");
    });

//    tab_services
    $(function () {
        $(".tab_services_item").not(":first").hide();
        $(".tabs_services_wrapper .tabs_services_item").click(function() {
            $(".tabs_services_wrapper .tabs_services_item").removeClass("active").eq($(this).index()).addClass("active");
            $(".tab_services_item").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("active");
    });

//     portfolio
    $("#container").mixItUp({
        animation: {
            effects: 'fade scale(0.01)',
            duration: 563,
            nudge: false,
            reverseOut: false
        }
    });

//      team
    $(".slick_container, .reviews_container").slick({
        dots: true,
        arrows: false
    });

//  scroll up
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    });

//  scroll id
    $(document).ready(function(){
        $(".toolbar_li").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top }, 1200);
        });
    });

// top menu
    $(document).ready(function () {
        $('.toolbar_btn_container').click(function () {
            $('.toolbar_ul').slideToggle(500);
        });
        $(window).resize(function () {
            if ($(window).width() > 968 ) {
                $('.toolbar_ul').removeAttr('style');
            }
        });
        $('.toolbar_li_link').click(function () {
            $('.toolbar_ul').removeAttr('style');
        });
    });
//    masonry

});

//  gallery swiper
    var swiper = new Swiper('.swiper-container ', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            autoHeight: true
        },
        mousewheel: {
            invert: true
        }
    });
//  WoWAnimation
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    );

    new WOW().init();