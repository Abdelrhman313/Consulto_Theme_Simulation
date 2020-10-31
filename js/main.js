$(()=>{
    window.onscroll = () => {

        // change navbar style on scroll
        if(pageYOffset >= 120){
            $('.navbar').addClass('fixed-top');
            $('.navbar').css('background-color', '#fff');
        }else{
            $('.navbar').removeClass('fixed-top');
        }
        

        // hide & show to-top-btn
        if(pageYOffset >= 220){
            $('.to-top-btn').css({
                'bottom': '30px',
                'opacity': '1'
            });
        }else{
            $('.to-top-btn').css({
                'bottom': '-50px',
                'opacity': '0'
            });
        }
    }

    // open navbar-nav
    $('.nav-collapse').click(()=>{
        $('.navbar-collapse').toggleClass('show');
    })

    window.onresize = () =>{
        if(window.innerWidth >= 990){    
            $('.navbar-collapse').removeClass('show');    
        } 
    };

    // open & close sideBar
    // open
    $('.open-sidebar').click(()=>{
        $('.sideBar').fadeIn(200);
    });
    // close
    $('.close-sidebar').click(()=>{
        $('.sideBar').fadeOut(200);
    });

    // open & close search section
    // open
    $('.open-search-section').click(()=>{
        $('.search-section').slideDown(600);
    });
    // close
    $('.close-search-section').click(()=>{
        $('.search-section').slideUp(600)
    });

    // display owl carousel in header section
    $('.header .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });
    
    // Bind as an event handler
    $(document).on('click', '[data-lightbox]', lity);

    // display count up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // display owl-carousel in case-study section
    $('.case-study .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        margin: 30,
        touchDrag: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });

    // display our-testimonials owl-carousel
    $('.our-testimonials .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            autoplayHoverPause: true,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                991: {
                    items: 1
                }
            }
        }
    )

    // display to-top-btn
    $('.to-top-btn').click(()=>{
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    })

    // Because only Chrome supports offset-path, feGaussianBlur for now

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if(!isChrome) {
        document.getElementsByClassName('infinityChrome')[0].style.display = "none";
        document.getElementsByClassName('infinity')[0].style.display = "block";
    }

    // remove preload animation after 4s
    setTimeout(() => {
        $('.preload>div').fadeOut(2000, ()=>{
            $('.preload').fadeOut(500);
        });
        $('body').css('overflow', 'auto');
    }, 6000);
});