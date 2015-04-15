$(document).on('scroll', function (e) {
    var alpha = $(document).scrollTop() / 700;
    $('.navbar-default').css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
});

$(function(){
        $("#typed").typed({
            strings: ["Drummer", "Runner", "Developer"],
            typeSpeed: 120,
            loop: true
        });
});