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
        slidesPerView: 1.48,
        spaceBetween: 66,
        slidesOffsetBefore:43,
        slidesOffsetAfter:43,
        breakpoints: {
            320: {
                slidesPerView: 1.5,
                spaceBetween: 66,
                slidesOffsetBefore:43,
                slidesOffsetAfter:43,
            },
            680: {
                slidesPerView: 1.5,
                spaceBetween: 60,
                slidesOffsetBefore:130,
                slidesOffsetAfter:130,
            },
            1180: {
                slidesPerView: 1.35,
                spaceBetween: 60,
                slidesOffsetBefore:100,
                slidesOffsetAfter:230,
            },
            1340: {
                slidesPerView: 1.48,
                spaceBetween: 120,
                slidesOffsetBefore:230,
                slidesOffsetAfter:230,
            },
        },
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
        if ($(window).outerWidth() <= 991) {
            if (!reasonSlider && reasonSelector) {
                reasonSlider = reasonSlider = new Swiper(".reason-slider", {
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
            }
            else {
                destroySwiper(reasonSlider);
            }
        }
        if ($(window).outerWidth() <= 766) {
            if (!typesSlider && typesSelector) {
                typesSlider = new Swiper(".types-slider", {
                    slidesPerView:'auto',
                    spaceBetween: 60,
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

    //TABS
    const tabLink = $('.tabs__nav-link');
    const tabContentItem = $('.tab-content');
    tabLink.click(function (e) {
        e.preventDefault();
        tabLink.removeClass('active');
        tabContentItem.removeClass('active');
        $(e.target).addClass('active');
        $($(e.currentTarget).attr('href')).addClass('active');
    });

    //MODAL
    $('.open-modal').on('click', function () {
        $('.backdrop, .popup').fadeIn(500);
    });

    $('.modal-close, .backdrop').on('click', function () {
        $('.backdrop, .popup').fadeOut(500);
    });

//    HIDE TEXT

    $('.show-more').click(function(){
        $('.block-more-info').slideToggle(300, function(){
            if ($(this).is(':hidden')) {
                $('.show-more').html('Більше інформації');
                $('.show-more').removeClass('open');
            } else {
                $('.show-more').html('Закрити');
                $('.show-more').addClass('open');
            }
        });
        return false;
    });

    //CHANGE BG
    $( '.bg-change' ).hover(function(){
        $( '.section-members__bg' ).css( 'background', 'linear-gradient(180deg, rgba(134, 200, 234, 0) 0%, #3BB239 78.81%)' );
    }, function(){
        $( '.section-members__bg' ).css( 'background', 'linear-gradient(180deg, rgba(134, 200, 234, 0) 0%, #0088EC 78.81%)' );
    });

    // $('.text-hide .open-up').on('click', function (e) {
    //     e.preventDefault();
    //     $(this).siblings().removeClass('hide');
    //     $(this).hide();
    // });
});

