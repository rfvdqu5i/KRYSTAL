$(function () {
    //  Lấy kích thước màn hình
    $(window).resize(function () {
        x = $(window).height();
        $('.slide').css('height', x);
    });

    //  Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //  Filter ảnh
    $('.recent-menu li').click(function () {
        $('.recent-menu li').removeClass('active');
        $(this).addClass('active');
    });
    var f = $('.filtr-container').filterizr({
        controlsSelector: '.fltr-controls'
    });
    window.filterizr = f;
});
