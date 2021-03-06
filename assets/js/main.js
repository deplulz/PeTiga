(function ($) {
    "use strict";

    /*----------------------------
     jQuery MeanMenu
     ------------------------------ */
    $('nav#dropdown').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
    });


    /*----------------------------
     counter js active
     ------------------------------ */
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    /*----------------------------
     owl active
     ------------------------------ */
    $('.slider-active').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });


    /*----------------------------
     owl active
     ------------------------------ */
    $('.slider-active2').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });


    /*----------------------------
     owl active
     ------------------------------ */
    $('.slider-active3').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });


    /*----------------------------
     owl active
     ------------------------------ */
    $('.slider-active4').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });


    /*----------------------------
     owl active
     ------------------------------ */
    $('.president').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });


    /*----------------------------
     owl active
     ------------------------------ */
    $('.slider-active5').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });


    /*----------------------------
     owl active brand-logo
     ------------------------------ */
    $('.slider-active6').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });


    /*--------------------------
     scrollUp
     ---------------------------- */
    var toTop = $('#toTop');
    var win = $(window);

    win.on('scroll', function () {
        if (win.scrollTop() > 200) {
            toTop.fadeIn();
        } else {
            toTop.fadeOut();
        }
    });
    toTop.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });


    /*--
     Magnific Popup
     ------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });


    /*---------------------
     countdown
     --------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
        });
    });


    //venbox start
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true,
        titleattr: 'data-title'
    })
    //venbox end


    /*----------------------------
     sticky active
     ------------------------------ */
    var header = $('.stick-h2');

    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 245) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });


    /*----------------------------
     wow js active
     ------------------------------ */
    new WOW().init();


    /*----------------------------
     Isotope js active
     ------------------------------ */
    $('.grid').imagesLoaded(function () {
        // filter items on button click
        $('.gallery-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });
    $('.gallery-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /*----------------------------
     youtube active
     ------------------------------ */
    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
    });

    /*----------------------------
     Height Thumbnail
     ------------------------------ */
    // (function() {
    //     $(function() {
    //         $('.thumbnail').hei({
    //             byRow: true,
    //             property: 'height',
    //             target: null,
    //             remove: false
    //         });
    //     });
    // })();


    function left($str, $length) {
        return $str.substr(0, $length);
    }

    function right($str, $length) {
        return $str.substr(-$length);
    }

    var $uri = right(document.title, 4);
    var q = document.getElementsByClassName('path-thumb');
    if (($uri == 'Home') || ($uri == 'home')) {
        //Jika page = beranda maka class path-thumb height = 350px
        $('.post-thumb').addClass('home-post-thumb');
    } else {
        $('.post-thumb').removeClass('home-post-thumb');
    }
    // document.getElementById('twitter-widget-0').contentWindow.document.getElementsByClassName('.Tweet-body').addClass('.twitter-style');

    function ElementByID(ids) {
        var idsget = [].slice.call(arguments), result = [];
        for (var i = 0; i < idsget.length; i = i + 1) {
            result.push(document.getElementById(idsget[i]));
        }
        return result;
    }

    if ((window.matchMedia("(max-width: 768px)").matches) && window.matchMedia(("(min-width: 768px)"))) {
        var sc = document.getElementById('side-Col');
        var nml = ElementByID('news', 'news1', 'news2');
        var $page = right(location.pathname, 15);
        var i;
        $('.bg_Size').removeClass('bg_Size').addClass('bg-size-resp');
        $('.header-area .logo').addClass('ml');
        $('.categori-list-img').addClass('wi-0');
        $('.hg-keg').addClass('hg-keg-r');
        $('.home-post-thumb').addClass('h-a');
        if ($page == 'kegiatan_detail') {
            $('.next').addClass('arr-sr');
            $('.prev').addClass('arr-sl');
            $('.LUT').removeClass('LUT').addClass('LUTR');
            $('.LUB').removeClass('LUB').addClass('LUBR');
            $('.text').removeClass('text').addClass('text-resp');
            tval('text-resp');
            $('.pos').addClass('hide');
        }
        sc.addClass('mt-20');
        for (i=0; i<nml.length; i++){
            nml[i].addClass('mb-30');
        }

    }
})(jQuery);