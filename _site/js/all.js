$(document).on('scroll', function (e) {
    var alpha = $(document).scrollTop() / 500;
    $('.navbar-default').css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
    $('.fa-angle-down').css('opacity', 0.4-alpha);
});

$(document).ready(function (e) {
  bindMouse();
  continueScroll();
});

$(document).ready(function () {
  $("#typed").typed({
      strings: ["Java", "Mobile Applications", "Haskell","Cloud", "Node.js", "Cassandra", "MongoDB"],
      typeSpeed: 100,
      backDelay: 400,
      loop: true
  });
});

function bindMouse () {
   $(window).bind("mousewheel", function () {
    $("html, body").stop();
  });
}

function continueScroll () {
  $('#continue').click(function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $('.projects').offset().top - 40
      }, 800);
  });
}