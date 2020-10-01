jQuery(document).ready(function() {
             // news_blog

    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });
    $("#landingcarousel").carousel({interval: 2000});
    // feedback Form
    $("#FeedbackForm").click(function () {
        $('#FeedbackModal').modal('toggle');
    });
    // climatic changes
    $("#climatic-changes").click(function () {
        $('#climatic-changesmodal').modal('toggle');
    });
    // global warming
    $("#global-warming").click(function () {
        $('#global-warmingmodal').modal('toggle');
    });
    // global warning
    $("#global-warning").click(function () {
        $('#global-warningmodal').modal('toggle');
    });
    // around the globe carousel
    $("#news_carousel").carousel({interval: 2000});
    // end
    $("#multi-item-example").carousel({interval: 2000});
    $("#cardslider1").carousel({interval: 100000});
    $("#cardslider2").carousel({interval: 100000});
    $("#cardslider3").carousel({interval: 100000});
    $('.card').delay(1800).queue(function(next) {
        $(this).removeClass('hover');
        $('a.hover').removeClass('hover');
        next();
    });
    $("#problem-img").carousel({interval: 100000});
    $(".level .progress").each(function() {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
          if (value <= 50) {
            right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
          } else {
            right.css('transform', 'rotate(180deg)')
            left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
          }
        }

      });

    function percentageToDegrees(percentage) {

      return percentage / 100 * 360

    };

    // Dashboard
    function canada() {
      var x = document.querySelector(".canada img");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    function india() {
      var x = document.querySelector(".india img");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    };
    jQuery('#vmap').vectorMap({
      map: 'world_en',
      color: '#ffffff',
      hoverOpacity: 0.7,
      selectedColor: 'cyan',
      enableZoom: true,
      showTooltip: true,
      scaleColors: ['#C8EEFF', '#006491'],
      values: sample_data,
      normalizeFunction: 'polynomial',
      onRegionClick: function(event, code)
        {
            if (code == 'ca')
            {
                canada();
            }
            if (code == 'ind')
            {
              india();
            }
        }
              // end
      });
    // indicators of index.html
    checkWidth();
    function checkWidth(init){
      if ($(window).width() > 900) {
            $('.level-indicator').removeClass('indicators');
            $('.dot-update').removeClass('dot');

        } 
      else {
            $('.level-indicator').addClass('indicators');
            $('.dot-update').addClass('dot');
        }
      };
      $(window).on('load, resize', checkWidth);



    var indicator = 0;
      showindicators();
      //add the global timer variable
      var indicators,dots,timer;

      function showindicators() {
          var i;
          indicators = document.getElementsByClassName("indicators");
          dots = document.getElementsByClassName("dot");
          for (i = 0; i < indicators.length; i++) {
             indicators[i].style.display = "none";  
          }
          indicator++;
          if (indicator> indicators.length) {indicator = 1}    
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          indicators[indicator-1].style.display = "block";  
          dots[indicator-1].className += " active";
          //put the timeout in the timer variable
          timer = setTimeout(showindicators, 4000); // Change image every 8 seconds
      }

      function currentSlide(index) {
          //clear/stop the timer
          clearTimeout(timer);
          if (index> indicators.length) {index = 1}
          else if(index<1){index = indicators.length}
          //set the indicator with the index of the function
          indicator = index;
          for (i = 0; i < indicators.length; i++) {
             indicators[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          indicators[index-1].style.display = "block";  
          dots[index-1].className += " active";
          //create a new timer
          timer = setTimeout(showindicators, 4000);
      }
     });
