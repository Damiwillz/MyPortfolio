function mySlick() {
    $(".slider").not('.slick-initialized').slick({
        centerMode: true,
        dots: false,
        arrows: true,
        autoplay: false,
        slidesToShow: 3,
        prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })
}
mySlick();

$(document).ready(function(){

    $('.testi-slider').slick({
        autoplay: false,
        speed: 1200,
        infinite: true,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        cssEase: 'linear',
        fade: true
    });

    if($('.slick-slide').hasClass('.slick-active')){
        $('.banner-text').addClass('animate__animated animate__fadeInUp');
    }else{
        $('.banner-text').removeClass('animate__animated animate__fadeInUp');
    }

    $(".testi-slider").on("beforeChange", function(){
        $('.banner-text').removeClass('animate__animated animate__fadeInUp').hide();
        setTimeout(() => {
            $('.banner-text').addClass('animate__animated animate__fadeInUp').show();
        }, 700);
    })

});