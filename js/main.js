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

