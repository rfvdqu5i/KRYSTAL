$(function () {
    $('.minus').css('display','none');
    $('.plus').on('click', function () {
        $(this).next().css("display", "block");
        $(this).css('display', 'none');
        $(this).parent().next().css("display", "block");
    });
    $('.minus').on('click', function () {
        $(this).prev().css('display', 'block');
        $(this).css('display', 'none');
        $(this).parent().next().css('display', 'none');
    });
});
