$(document).ready(function(){
    $(".content-link.reservation").click(function(e) {
        $(".content-link.active").removeClass("active");
        $(this).toggleClass("active");
        $(".content-box.reservation").toggleClass("active");
    })
    $(".content-link.orderfood").click(function(e) {
        $(".content-link.active").removeClass("active");
        $(this).toggleClass("active");
        $(".content-box.orderfood").toggleClass("active");
    })
    $(".content-link.about").click(function(e) {
        $(".content-link.active").removeClass("active");
        $(this).toggleClass("active");
        $(".content-box.about").toggleClass("active");
    })
});