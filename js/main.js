$(document).ready(function() {
  var search = document.getElementById('Search');
  var zoom = document.getElementsByClassName('zoom');
  $(search).focus(function() {
    $(zoom).hide();
  });
  $(search).focusout(function() {
    $(zoom).show();
  });
  $(search).on('keyup',function(){
  var $this = $(this),
      val = $this.val();

  if(val.length >= 1){
    $(zoom).hide();
    $(search).focusout(function() {
      $(zoom).hide();
    });
  }else {
    $(zoom).show();
  }
  });
});

$(function() {
	var h_hght = $('.banner').outerHeight();
	var h_nav = $('.navbar').outerHeight();
	var top;
  	$(window).scroll(function(){
  		top = $(this).scrollTop();
  		if((h_hght-top) <= h_nav) {
        $('.navbar').addClass('fixed');
  		} 
  		else {
  			$('.navbar').removeClass('fixed');
  		}
      if(screen.width < 768) {
        $('.navbar').removeClass('fixed');
      }
  	});	
});


  var currentNumber1 = $('#DynamicNumber1').text();
  $({numberValue: currentNumber1}).animate({numberValue: 81}, {
      duration: 2000,
      easing: 'linear',
      step: function() { 
          $('#DynamicNumber1').text(Math.ceil(this.numberValue)); 
      }
  });
  var currentNumber2 = $('#DynamicNumber2').text();
  $({numberValue: currentNumber2}).animate({numberValue: 596 }, {
      duration: 2000,
      easing: 'linear',
      step: function() { 
          $('#DynamicNumber2').text(Math.ceil(this.numberValue)); 
      }
  });
  var currentNumber3 = $('#DynamicNumber3').text();
  $({numberValue: currentNumber3}).animate({numberValue: 80}, {
      duration: 2000,
      easing: 'linear',
      step: function() { 
          $('#DynamicNumber3').text(Math.ceil(this.numberValue)); 
      }
  });
   var currentNumber4 = $('#DynamicNumber4').text();
  $({numberValue: currentNumber4}).animate({numberValue: 10}, {
      duration: 2000,
      easing: 'linear',
      step: function() { 
          $('#DynamicNumber4').text(Math.ceil(this.numberValue)); 
      }
  });



$('.navbar-toggle').click(function() {
  $(this).toggleClass('active');
})



$(window).bind('resize', function () {  
    if (window.matchMedia('(max-width: 767px)').matches) {
      $(".navbar").appendTo("#StellageTab");
    }
    else {
      $(".navbar").appendTo(".banner");
    }
}).trigger('resize');




$(document).ready(function(){   
  jQuery('.anchor').click(function(){
    var sel = this.hash;
    jQuery('html, body').animate({scrollTop: jQuery(sel).offset().top-100}, 900);
    return false;
  });
  $('.anchor').click(function(){   
      $('#order-form .form-group:first-child input').focus();
  });
});



