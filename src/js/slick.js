

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
$(document).ready(function(){
    $('.hero-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        fade: true,
        cssEase: 'linear'
        // prevArrow: '<i class="slick-prev fa-solid fa-chevron-left"></i>',
        // nextArrow: '<i class="slick-next fa-solid fa-chevron-right"></i>',
    });
});


// // Hero Carousels.
// $(document).ready(function(){
//     $('.slick-trial').slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         dots: true,
//         // prevArrow: '<i class="slick-prev fa-solid fa-chevron-left"></i>',
//         // nextArrow: '<i class="slick-next fa-solid fa-chevron-right"></i>',
//     });
// });