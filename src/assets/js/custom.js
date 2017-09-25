(function($) {
  "use strict";

//Partner logo slider
  var owl = $("#partner-logo-slider");

  owl.owlCarousel({

       navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
          ],
      responsive:{
        0:{
            items:1,
            nav:true
        },
         480:{
            items:2,
            nav:true
        },
        768:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
  });

//Search panel open/close
        $(function () {
          $('a[href="#search"]').on('click', function(event) {
              event.preventDefault();
              $('#search').addClass('open');
              $('#search > form > input[type="search"]').focus();
          });

          $('#search, #search button.close').on('click keyup', function(event) {
              if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                  $(this).removeClass('open');
              }
          });


          //Do not include! This prevents the form from submitting for DEMO purposes only!
          $('form').submit(function(event) {
              event.preventDefault();
              return false;
          })
      });




$(document).ready(function(){


    // Accordion panel
    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('fa-plus fa-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);




   //Responsive tab
   $('.responsive-tabs').responsiveTabs({
    accordionOn: ['xs', 'sm']
  });



    //Fullsceen function
    function full_screen_mode() {
        $('.showcase-section').css({
            //width: $(window).width(),
            height: $(window).height()
        });
    }
    $(window).resize(function() {
        full_screen_mode();
    });
    full_screen_mode();


    //home arrow animation
    function reanimate() {
        $('.down-arrow-btn').animate({
            bottom: 10
        }, 1000).animate({
            bottom: 35
        }, 1000, function () {
            setTimeout(reanimate, 100);
        });
    }
    reanimate();

    $(".down-arrow-btn").on('click',function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 0
        }, 1500,'easeInOutExpo');
        return false;
    });




  //blog carousel
  $('#blog-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:2,
            nav:false,
            dots:true
        },
        1000:{
            items:3,
            nav:true,
            dots:false
        }
    }
})


 //Related Post carousel
  $('#related-post-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText: ["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:2,
            nav:false,
            dots:true
        },
        1000:{
            items:3,
            nav:true,
            dots:false
        }
    }
})


// Counter
    jQuery('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });



//Filter panel
$(".filter-button").on('click',function(){
            var value = $(this).attr('data-filter');

            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');

            }
        });

 $(".filter-section").on('click', 'button', function() {
    $('.filter-button.active').removeClass('active');
    $(this).addClass('active');
});

//Image gallery modal
$('.fg-overlay').on('click',function(){
      $('.modal-body').empty();
      	var title = $(this).parent('div').attr("title");
  	$('.modal-title').html(title);

	var imgpath = $(this).parent('.feature-gallery').children('img').attr("data-img-url");
	$('.modal-body').html('<img src='+imgpath+'>');
		//event.preventDefault();
  	$('#gallery-modal').modal({show:true});
});


//Blog Calendar
$(".responsive-calendar").responsiveCalendar();


});
})(jQuery);