$(function(){
    $('#open').on('click', function () {
        $('#menu').css('width','60%');
        $(this).css('display','none');
        $(this).next().children().css('display','block');
    });
    $('#close').on('click', function () {
        $('#menu').css('width','0');
        $(this).css('display','block');
        $(this).prev().children().css('display','none');
    });
});