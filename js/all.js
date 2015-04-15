$(document).on('scroll', function (e) {
    var alpha = $(document).scrollTop() / 700;
    $('.navbar-default').css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
});

$(function(){
        $("#typed").typed({
            strings: ["Hugo Källström"],
            typeSpeed: 150,
            backDelay: 900
        });
});