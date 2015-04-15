$(document).on('scroll', function (e) {
    var alpha = $(document).scrollTop() / 700;
    $('.navbar-default').css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
});

$(function(){
        $("#typed").typed({
            strings: ["Hakc", "Hacking since 1991"],
            typeSpeed: 100,
            backDelay: 400
        });
});