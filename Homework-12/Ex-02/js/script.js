$(function(){
    $('#open').on('click', function () {
        $('#menu').css('width','60%');
        $(this).children().css('display','none');
        $(this).next().children().css('display','block');
    });
    $('#close').on('click', function () {
        $('#menu').css('width','0');
        $(this).children().css('display','none');
        $(this).prev().children().css('display','block');
    });
    $('.support').on('click', function() {
        $('.sup').toggleClass('active');
    });
});