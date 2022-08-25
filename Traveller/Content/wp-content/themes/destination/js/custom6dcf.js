;(function($, window, document, undefined) {
    "use strict";

    // Sidr Menu
	$('.menu-icon').sidr({
		name: 'sidr-main',
		displace: false,
		source: '#mobile-header, #mobile-navigation, #mobile-footer',
		renaming: false,
    });

	$( "<span class='open-sidr'></span>" ).insertAfter( ".sidr .menu-item-has-children > a" );
	$('.sidr').find('.open-sidr').click(function(){
		$(this).next().slideToggle('fast');
    });
	$(".open-sidr").click(function(){
        $(this).toggleClass('close');
    });
	
	$( 'a#close-mobile-menu' ).on('click', function(e){
		e.preventDefault();
		$.sidr('close', 'sidr-main');
	});
	
	jQuery(window).resize(function() {
       jQuery.sidr('close', 'sidr-main');
	});


    /* Main Slider*/
    // $('#owl-carousel').owlCarousel({
    //     loop: false,
    //     video:true,
    //     margin: 0,
    //     autoplay: 4000,
    //     nav: true,
    //     navText: [
    //         "<i class='fa fa-angle-left'></i>",
    //         "<i class='fa fa-angle-right'></i>"
    //     ],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // })

    // $('#owl-carousel2').owlCarousel({
    //     loop: true,
    //     video:true,
    //     margin: 0,
    //     nav: true,
    //     navText: [
    //         "<i class='fa fa-angle-left'></i>",
    //         "<i class='fa fa-angle-right'></i>"
    //     ],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // })



    // Site animations
    function onScrollInit(items, trigger) {
        $(items).css('opacity', 0);
        items.each(function() {
            var osElement = $(this),
                osAnimationClass = osElement.attr('data-os-animation'),
                osAnimationDelay = osElement.attr('data-os-animation-delay');

            osElement.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });

            var osTrigger = (trigger) ? trigger : osElement;

            osTrigger.waypoint(function() {
                osElement.addClass('animated').addClass(osAnimationClass);
            }, {
                triggerOnce: true,
                offset: '90%'
            });
        });
    }

    onScrollInit($('.os-animation'));

$(document).ready(function() {

    /*Masonry Function call*/
    var $container1 = $(".masonry-row");
    //var $container1 = $(".mb-post-wrap");
    

    $container1.masonry({
        itemSelector: '.masonry',
        gutter: 0,
        initLayout: false
    });


    // add event listener for initial layout
    $container1.on('layoutComplete', function(event, items) {
        console.log(items.length);
    });
    
    // trigger initial layout
    $container1.masonry();


    



    
});



// Sticky Header
//Header 1
var headerType = document.querySelectorAll('#header')[0].className;
var stickyHeader = '';

if(headerType == 'header1') {
    stickyHeader = document.querySelector(".header1 #fixed-nav");
}else{
    stickyHeader = document.querySelector(".header2 .header-bg");
}
var sticky = stickyHeader.offsetTop;

document.addEventListener("scroll", function(){
    if (window.pageYOffset >= sticky) {
        stickyHeader.classList.add("header-sticky");
    }else {
        stickyHeader.classList.remove("header-sticky");
    }
});



/* - Responsive Video */
$(".blog-post-media-video, .embed-youtube").fitVids();

$('.entry-media .owl-carousel, .single-media-thumb .image-overlay').each(function () {
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery:{
            enabled:true
            }
    });
});





    // OwlCarousel
    //if ($().owlCarousel !== undefined && $().owlCarousel !== 'undefined') {
        // $('.dc-slider').each(function () {
        //     var $owl = $('.owl-carousel', $(this));
        //     var $refreshed = true;
        //     var $margin = 0;
        //     var $smartSpeed = 800;
        //     var $mouseDrag = false;
        //     var $marginRes = 0;
        //     var $autoWidth = false;
        //     var $singleItem = true;
        //     var $loop = true;
        //     var $items = 1;
        //     var $itemRes0 = 1;
        //     var $itemRes768 = 1;
        //     var $itemRes960 = 1;
        //     var $slAuto = destination_script_data.slider_auto;
        //     var $slDelay = destination_script_data.slider_delay;

        //     if ($(this).hasClass('slider3')) {
        //         $loop = false;
        //         $singleItem = false;
        //         $items = 3;
        //         $margin = 30;
        //         $itemRes0 = 1;
        //         $itemRes768 = 2;
        //         $itemRes960 = 3;
        //         $smartSpeed = 1000;
        //         $mouseDrag = true;
        //         $marginRes = 20;
        //         $autoWidth = true;
        //         var $marginDef = $margin;
        //         var $width = $owl.width();
        //         var $widthS = 0;
        //         var $widthL = 0;
        //     } 
        //     $owl.owlCarousel({
        //         singleItem: $singleItem,
        //         navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"],
        //         nav: true,
        //         dots: false,
        //         autoplay: $slAuto,
        //         autoplayTimeout: $slDelay,
        //         margin: $margin,
        //         smartSpeed: $smartSpeed,
        //         mouseDrag: $mouseDrag,
        //         autoWidth: $autoWidth,
        //         fallbackEasing: 'linear',
        //         loop: $loop,
        //         items: $items,
        //         responsive: {
        //             0: {
        //                 items: $itemRes0,
        //                 margin: $marginRes
        //             },
        //             768: {
        //                 items: $itemRes768,
        //                 margin: $marginRes
        //             },
        //             960: {
        //                 items: $itemRes960,
        //                 margin: $marginRes
        //             },
        //             1200: {
        //                 items: $items
        //             }
        //         }
        //     });
        //     /* Important After $owl.owlCarousel(); */
        //     if ($(this).hasClass('slider3')) {
        //         $owl.on('refresh.owl.carousel', function () {
        //             $owl.removeClass('slider3-trans');
        //             $refreshed = true;
        //             $width = 400;
        //             $margin = window.matchMedia('(max-width: 1199px)').matches ? $marginRes : $marginDef;
        //             if (window.matchMedia('(max-width: 991px)').matches) {
        //                 $widthL = $width;
        //             } else {
                        
        //                 $widthL = $width - $widthS - $margin;
        //             }
                    
        //         });
        //         $owl.on('changed.owl.carousel', function (e) {
        //             $width = $owl.width();
        //             $margin = window.matchMedia('(max-width: 1199px)').matches ? $marginRes : $marginDef;
        //             var $dif=2;
        //             if (window.matchMedia('(max-width: 991px)').matches) {
        //                 $dif=1;
                        
        //                 $widthL = $width;
        //             } else {
        //                 $widthS = parseInt(($width - 2 * $margin) / 3, 10);
        //                 $widthL = $width - $widthS - $margin;
        //             }
        //             $('.slider-item', $owl).width($widthS);
                    
                    
        //         });
        //         $owl.trigger('refresh.owl.carousel');
        //     }
            
        // });
        
        
        $('.dc-post-carousel > .owl-carousel').each(function () {
            var $cOwl = $(this);
            var $items = $cOwl.hasClass('layout-2') ? 3 : 4;
            var $autoPlay = $cOwl.data('auto-play');
            if ($autoPlay === '') {
                $autoPlay = false;
            }
            $cOwl.owlCarousel({
                autoPlay: $autoPlay,
                navigation: true,
                pagination: true,
                stopOnHover: true,
                margin: 20,
                dotsEach: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    640: {
                        items: 2
                    },
                    991: {
                        items: $items
                    }
                }
            });
        });
        $('.dc-post-widget .owl-carousel').each(function () {
            var $cOwl = $(this);
            $cOwl.owlCarousel({
                navigation: true,
                pagination: true,
                dotsEach: true,
                items: 1
            });
        });

        $('.blog-post-media .owl-carousel').each(function () {
            var $cOwl = $(this);
            $cOwl.owlCarousel({
                navText: ["<i class=\'fa fa-angle-left\'></i>", "<i class=\'fa fa-angle-right\'></i>"],
                nav: true,
                navigation: true,
                pagination: true,
                dotsEach: true,
                items: 1
            });
        });
   // }

    $('.feature-posts').each(function () {
        var $cFeatPost = $(this);
        var $cFeatPostItems = $cFeatPost.children('.post-item');
        var $auto = true;
        var $time = 0;
        var $timeInt = 1000;
        var $timeMax = 3000;
        $cFeatPostItems.each(function () {
            var $cFeatPostItem = $(this);
            $cFeatPostItem.on({
                mouseenter: function () {
                    $cFeatPostItem.addClass('active').siblings('.post-item').removeClass('active');
                    $auto = false;
                },
                mouseleave: function () {
                    $time = 0;
                    $auto = true;
                }
            });
        });

        if ($cFeatPostItems.length > 1) {
            setInterval(function () {
                if ($auto && $time > $timeMax) {
                    $time = 0;
                    var $activeItem = $cFeatPost.children('.post-item.active');
                    var $nextItem = $activeItem.next('.post-item').hasClass('post-item') ? $activeItem.next('.post-item') : $cFeatPostItems.eq(0);
                    $nextItem.addClass('active');
                    $activeItem.removeClass('active');
                } else {
                    $time += $timeInt;
                }
            }, $timeInt);
        }
    });


}(jQuery, this, document));
// End Scripts