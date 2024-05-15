

// Services Carousels.
$(document).ready(function(){
    $('.service-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '<span class="slick-prev"> <i class="fa-solid fa-chevron-left"></i> </span>',
        nextArrow: '<span class="slick-next"> <i class="fa-solid fa-chevron-right"></i> </span>',
    });
});





// Hero Carousels.
// $(document).ready(function(){
//     $('.hero-slick').slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         dots: true,
//         arrows: false,
//         fade: true,
//         cssEase: 'linear'
//         // prevArrow: '<i class="slick-prev fa-solid fa-chevron-left"></i>',
//         // nextArrow: '<i class="slick-next fa-solid fa-chevron-right"></i>',
//     });
// });





// Partners Slick
$(document).ready(function(){
    $('.customer-logos').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        arrows: false,
        // fade: true,
        cssEase: 'ease-in-out',
        prevArrow: '<span class="slick-prev"> <i class="fa-solid fa-chevron-left"></i> </span>',
        nextArrow: '<span class="slick-next"> <i class="fa-solid fa-chevron-right"></i> </span>',

        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                // dots: true
              }
            }
        ]
    });
});