/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../lib/swiper/swiper-bundle.min.js
//= include ../lib/waypoints/index.js

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

    if ($('.about-urolesan').get(0)) {
        const aboutUrolesan = new Swiper(".about-urolesan", {
            slidesPerView: 1.48,
            spaceBetween: 66,
            slidesOffsetBefore: 43,
            slidesOffsetAfter: 43,
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 66,
                    slidesOffsetBefore: 43,
                    slidesOffsetAfter: 43,
                },
                680: {
                    slidesPerView: 1.5,
                    spaceBetween: 60,
                    slidesOffsetBefore: 130,
                    slidesOffsetAfter: 130,
                },
                1180: {
                    slidesPerView: 1.25,
                    spaceBetween: 60,
                    slidesOffsetBefore: 100,
                    slidesOffsetAfter: 100,
                },
                1340: {
                    slidesPerView: 1.48,
                    spaceBetween: 120,
                    slidesOffsetBefore: 230,
                    slidesOffsetAfter: 260,
                },
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    let reasonSlider;
    let typesSlider;
    const reasonSelector = $('.reason-slider').get(0);
    const typesSelector = $('.types-slider').get(0);

    function handleResponsive() {

        // DESTROY SLIDER INSTANCES

        if ($(window).outerWidth() <= 991) {
            if (!reasonSlider && reasonSelector) {
                reasonSlider = new Swiper(".reason-slider", {
                    spaceBetween: 60,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
            }
        } else {
            destroySwiper(reasonSlider);
            reasonSlider = null;
        }

        if ($(window).outerWidth() <= 767) {
            if (!typesSlider && typesSelector) {
                typesSlider = new Swiper(".types-slider", {
                    slidesPerView: 1.25,
                    spaceBetween: 60,
                    slidesOffsetBefore: 10,
                    slidesOffsetAfter: 40,
                    breakpoints: {
                        420: {
                            slidesPerView: 1.5,
                            spaceBetween: 60,
                            slidesOffsetBefore: 10,
                            slidesOffsetAfter: 40,
                        },
                        767: {
                            slidesPerView: 1.75,
                            spaceBetween: 60,
                            slidesOffsetBefore: 10,
                            slidesOffsetAfter: 40,
                        },
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                });
            }
        } else {
            destroySwiper(typesSlider);
            typesSlider = null;
        }
    }

    let resizeId;


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

    $('.open-modal').on('click', function (e) {
        e.preventDefault();
        $('.backdrop, .popup').fadeIn(500);
    });

    $('.close-popup, .backdrop').on('click', function () {
        $('.backdrop, .popup').fadeOut(500);
    });

    // Popover

    $('.trigger-popover').click(function (e) {
        e.preventDefault();
        $('.trigger-popover').not(this).toggleClass('hide');
        $(this).toggleClass('active');

        const popover = $(this).siblings('.popover');
        popover.toggleClass('active');

        if ($(this).hasClass('active')) {
            const btnData = $(this).get(0).getBoundingClientRect();
            const margin = 30;
            const popoverWidth = popover.outerWidth();
            const windowW = $(window).width();

            const isRight = windowW - btnData.x - btnData.width - margin;
            const isLeft = btnData.x - margin;

            if (isRight > popoverWidth) {
                popover.css({left: btnData.width + margin, top: 0});
            } else if (isLeft > popoverWidth) {
                popover.css({left: -(popoverWidth + margin), top: 0});
            } else {
                popover.css({top: btnData.height + margin, left: -(btnData.x - popoverWidth - btnData.width - margin)});
            }
        }
    });

    $('.diagnoses-list__item').click(function () {
        $('.diagnoses-list__item').removeClass('active');
        $(this).addClass('active');
    });

//    HIDE TEXT

    $('.show-more').click(function () {
        const showMore = $(this);
        const openText = showMore.attr('data-open-text');
        const defaultText = showMore.attr('data-default-text');

        if ($('.toggle-content').hasClass('one')) {
            const showMoreOther = $('.show-more').not($(this));
            $('.block-more-info').not($(this).prev()).slideUp(300);

            showMoreOther.html(defaultText);
            showMoreOther.removeClass('open');
        }

        $(this).prev().slideToggle(300);

        if (!$(this).hasClass('open')) {
            showMore.html(openText);
            showMore.addClass('open');
        } else {
            showMore.html(defaultText);
            showMore.removeClass('open');
        }
    });


    //CHANGE BG

    $('.bg-change').hover(function () {
        $('.section-members__bg').css('background', 'linear-gradient(180deg, rgba(134, 200, 234, 0) 0%, #3BB239 78.81%)');
    }, function () {
        $('.section-members__bg').css('background', 'linear-gradient(180deg, rgba(134, 200, 234, 0) 0%, #0088EC 78.81%)');
    });

    //  HOVER BANNER

    $(' .btn').hover(function () {
        $('.hand').addClass('rotate')
    }, function () {
        $('.hand').removeClass('rotate')
    });

//    ANIMATION


    setTimeout(function () {
        const sectionWaypoints = $('.anim-page').waypoint({
            handler: function () {
                $(this.element).addClass('active-anim');
            },
            offset: '80%'
        });
    }, 300);

});

