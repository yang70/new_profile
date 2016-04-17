$(document).ready(function(){

  $("#menu-toggle, #close").click(function(e) {
      e.preventDefault();
      
      $("#wrapper").toggleClass("toggled");

      if($("#wrapper").hasClass("toggled")) {
        $("nav").toggle();
      } else {
        setTimeout(function() {
          $("nav").toggle();
        }, 500);
      }
  });

  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      if($("#wrapper").hasClass("toggled")) {
        
        $("#wrapper").toggleClass("toggled");
        
        if($("#wrapper").hasClass("toggled")) {
          $("nav").toggle();
        } else {
          setTimeout(function() {
            $("nav").toggle();
          }, 500);
        }

      }
      event.preventDefault();
  });

});
