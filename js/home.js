// Activate Carousel
$("#featuredCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#featuredCarousel").carousel(1);
});

// Enable Carousel Controls
$(".carousel-control-prev").click(function(){
    $("#featuredCarousel").carousel("prev");
});

$(".carousel-control-next").click(function(){
    $("#featuredCarousel").carousel("next");
});