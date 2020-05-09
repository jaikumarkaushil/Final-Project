$(document).ready(function() {
            if (typeof NProgress != 'undefined') {
                $(document).ready(function () {
                    NProgress.start();
                });

                $(window).on('load', function () {
                    NProgress.done();
                });
            }
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
              $(".progress").each(function() {

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

              })

              function percentageToDegrees(percentage) {

                return percentage / 100 * 360

              }
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

                // cards
                 // $("#cardslider").on("slide.bs.carousel", function(e) {
                 //    var $e = $(e.relatedTarget);
                 //    var idx = $e.index();
                 //    var itemsPerSlide = 3;
                 //    var totalItems = $(".carousel-item").length;

                 //    if (idx >= totalItems - (itemsPerSlide - 1)) {
                 //      var it = itemsPerSlide - (totalItems - idx);
                 //      for (var i = 0; i < it; i++) {
                 //        // append slides to end
                 //        if (e.direction == "left") {
                 //          $(".carousel-item")
                 //            .eq(i)
                 //            .appendTo(".carousel-inner");
                 //        } else {
                 //          $(".carousel-item")
                 //            .eq(0)
                 //            .appendTo($(this).find(".carousel-inner"));
                 //        }
                 //      }
                 //    }
                 //  });
                
                $("#cardslider1").carousel({interval: 100000});
                $("#cardslider2").carousel({interval: 100000});
                $("#cardslider3").carousel({interval: 100000});
                $('.card').delay(1800).queue(function(next) {
                    $(this).removeClass('hover');
                    $('a.hover').removeClass('hover');
                    next();
                });
                $("#problem-img").carousel({interval: 100000});
             });
