$(document).on('scroll', function (e) {
    var alpha = $(document).scrollTop() / 500;
    $('.navbar-default').css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
});

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#f0f0f0');
      } else {
          $('.navbar-default').css('background-color', 'transparent');
      }
    });
  }
});

$(document).ready(function(){
        $("#typed").typed({
            strings: ["Java", "Mobile Applications", "Haskell","Cloud", "Node.js", "Cassandra", "MongoDB"],
            typeSpeed: 100,
            backDelay: 400,
            loop: true
        });
});
