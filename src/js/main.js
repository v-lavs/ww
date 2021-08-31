/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;


// CUSTOM SCRIPTS

function destroySwiper(sliderInstance) {
    if (sliderInstance instanceof Swiper && sliderInstance.initialized) {
        sliderInstance.destroy(true, true);
        console.log('destroy')
    }
}

$(document).ready(function () {
    //MOBILE MENU
    const nav = $('.header__nav');

    $('.btn-burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });


    //SLIDER
    var aboutUrolesan = new Swiper(".about-urolesan", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    let reasonSlider;
    let typesSlider;
    const reasonSelector = $('.reason-slider').get(0);
    const  typesSelector =$('.types-slider').get(0);

    function handleResponsive() {
        // DESTROY SLIDER INSTANCES
        if ($(window).outerWidth() <= 940) {
            if (!reasonSlider && reasonSelector) {
                reasonSlider = reasonSlider = new Swiper(".reason-slider", {
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
            }
        } else {
            destroySwiper(reasonSlider);
        }
        if ($(window).outerWidth() <= 580) {
            if (!typesSlider && typesSelector) {
                typesSlider = new Swiper(".types-slider", {
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
            }
        } else {
            destroySwiper(typesSlider);
        }
    }

    var resizeId;

    handleResponsive();
    window.addEventListener('resize', function () {
        clearTimeout(resizeId);
        resizeId = setTimeout(handleResponsive, 500);
    });

});

