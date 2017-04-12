/**
 * Created by Dell Precision on 3/10/2017.
 */

// Dropdown menu
jQuery(function ($) {
    $('.mn3').hide();

    if ($(window).width() > 769) {
        $('.navbar .dropdown').hover(function () {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
        }, function () {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
        });

        $('.navbar .dropdown > a').click(function () {
            location.href = this.href;
        });
    }
    else {
        $(".dropdown-submenu").click(function (event) {
            // stop bootstrap.js to hide the parents
            event.stopPropagation();
            // hide the open children
            $(this).parents().parents().addClass('open');
            // this is also open (or was)
            $(this).toggleClass('open');
            $(this).find('.dropdown-menu').first().show();
        });
    }
});

$(document).ready(function () {

    //Lien ket slider
    $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 170,
        slideMargin: 1,
        ticker: true,
        speed: 8000
    });

    // wow js
    new WOW().init();

// config back to top
    var offset = 300;

//hide or show the "back to top" link
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('#btn-to-top').css('display', 'block');
        } else {
            $('#btn-to-top').css('display', 'none');
        }
        ;
    });

    $('#btn-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

});



