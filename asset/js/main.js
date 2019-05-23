$(document).ready(function () {
    $('.opinions-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            }
        }
    })

    $('.team-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 4
            }
        }
    })

    var scrollLink = $('.navbar .nav-item .nav-link');
    scrollLink.on("click", function (e) {
        e.preventDefault();
        $(this).parent('.nav-item').addClass('active');
        $(this).parent('.nav-item').siblings().removeClass('active');
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 1000);
    });
    
    
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $('.to-top').addClass('active');
        }
        else{
            $('.to-top').removeClass('active');
        }
    });
    
    $('.to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    
    
});
