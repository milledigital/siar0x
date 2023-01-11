$(document).ready(function () {
    $(window).scrollTop(0);

    // $(window).fadeThis();

    $(window).on('scroll', function () {
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();

        var scrollPercent = (s / (d - c)) * 100;

        $('.percent').css('height', scrollPercent + '%');
    })

});