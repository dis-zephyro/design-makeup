$('.filter-bar .uui-slider-handle').each(function (index, handle) {
    if (index % 2 == 0) $(handle).addClass('even-handle');
    else $(handle).addClass('odd-handle');
});


jQuery(".filter-bar").slider({
    min: 2010,
    max: 2014,
    values: [2010,2014],
    range: true,
    step: 1
});


$('.btn-show').click(function() {
        $('.comment-text').addClass("resize");
        $('.btn-show').hide();
        $('.btn-hide').show();
    }
);

$('.btn-hide').click(function() {
        $('.comment-text').removeClass("resize");
        $('.btn-hide').hide();
        $('.btn-show').show();
    }
);

$('.option-more').click(function() {
        $('.option-more').hide();
        $('.option').show();
    }
);


$("#scale1").slider({
    value:1000,
    min: 1000,
    max: 10000,
    step: 1
});


// Мобильное меню.

$(function() {
    var pull = $('#pull');
    menu = $('.filter-wrap');

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle('fast');
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 1440 && menu.is(':hidden')) {
            menu.removeAttr('10000');
        }
    });
});