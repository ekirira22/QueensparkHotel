$(document).ready(function() {
    $('.dropdown-toggle').dropdown();
    $('.tlt').textillate({ in: {
            effect: 'splat',
            reverse: true
        },
        out: {
            effect: 'none'
        },
        loop: true
    });
    $('.tlt2').textillate({ in: {
            effect: 'bounce',
            reverse: true
        },
        out: {
            effect: 'none'
        },
        initialDelay: 1500,
        loop: true
    });
    $(document).on('click', 'a', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    (function($) {
        'use strict';

        // Elevator - Scroll back to top utility JS
        // ========================================

        // append necessary class
        // should have already contain wrapper on a page.
        // <div class="elevator-wrapper"></div>
        $('.elevator-wrapper').append('<div class="elevator"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>');

        // browser window scroll (in pixels) after which the "back to top" link is shown
        var offset = 300,
            // duration of the top scrolling animation (in ms)
            scroll_top_duration = 700,
            // grab the "back to top" link
            $back_to_top = $('.elevator');

        // hide or show the "back to top" link
        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? $back_to_top.addClass('elevator-is-visible'): $back_to_top.removeClass('elevator-is-visible');
        });

        // smooth scroll to top
        $back_to_top.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, scroll_top_duration);
        });

    })(jQuery);
});
