$(document).ready(function(){                    
    $(window).scroll(function(){
      let sT =  $(window).scrollTop();
      $('.feesh').css({
        opacity: (sT < 601 ? 0 : (sT > 700 ? 1 : (sT - 600)/100))
      })
    });
});
$(document).ready(function(){                    
    $(window).scroll(function(){
      let sT =  $(window).scrollTop();
      $('.c').css({
        opacity: (sT < 601 ? 0 : (sT > 700 ? 1 : (sT - 600)/100))
      })
    });
});

//$(document).ready(function(){
//    {
//       $('.bubble').addClass("container-hide");   
//    }
//});

$(document).ready(function(){                    
    $(window).scroll(function(){
      let sT =  $(window).scrollTop();
      $('.bubble').css({
        opacity: (sT < 601 ? 0 : (sT > 700 ? 1 : (sT - 600)/100))
      })
    });
});

//$(window).scroll(function() {
//
//    if ($(window).scrollBottom() > 10) {
//        $('nav').addClass('sticky');
//    } else {
//        $('nav').removeClass('sticky');
//    }
//});

$(document).ready(function(){                    
    $(window).scroll(function(){
      let sT =  $(window).scrollTop();
      $('#nav-bg').css({
        opacity: (sT < 400 ? 0 : (sT > 500 ? 1 : (sT - 400)/100))
      })
    });
});
//$(document).ready(function(){                    
//    $(window).scroll(function(){
//      let sT =  $(window).scrollTop();
//      $('nav').css({
//        opacity: (sT < 400 ? 0 : (sT > 500 ? 1 : (sT - 400)/100))
//      })
//    });
//});

$(document).ready(function(){                    
    $(window).scroll(function(){
      let sT =  $(window).scrollDown();
      $('.w-100 bounce').css({
        opacity: (sD < 601 ? 0 : (sD > 700 ? 1 : (sD - 600)/100))
      })
    });
});


$(document).ready(function(){

$(window).scroll(function(){              
        if ($(this).scrollDown() > 50) {
            $('#w-100 bounce').fadeOut('slow');
        }else{
            $('#w-100 bounce').fadeIn('slow');
        } 
    }); 
});




var header = $('header');
var range = 200;

$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css({ 'opacity': calc });

  if (calc > '1') {
    header.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    header.css({ 'opacity': 0 });
  }
  
});


var window_width = $(window).width() - $('#id').width();

var document_height = $(document).height() - $(window).height();

$(function () {
    $(window).scroll(function () {
        var scroll_position = $(window).scrollTop();
        var object_position_left = window_width * (scroll_position / document_height);
        $('#id').css({
            'left': object_position_left
        });
    });
});


$('.menuToggle').on('click', function(){
 console.log('click'); $('.menu').toggleClass('menu--is-closed'); 
});








