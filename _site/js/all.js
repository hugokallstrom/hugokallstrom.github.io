$(document).on('scroll', function (e) {
    var alpha = $(document).scrollTop() / 500;
    $('.navbar-default').css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
});

$(document).ready(function(){
        $("#typed").typed({
            strings: ["Java", "Mobile Applications", "Haskell","Cloud", "Node.js", "Cassandra", "MongoDB"],
            typeSpeed: 100,
            backDelay: 400,
            loop: true
        });
});
