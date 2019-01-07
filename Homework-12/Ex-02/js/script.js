$(function(){
    $('#open').on('click', function () {
        $('#menu').css('width','60%');
        $(this).css('display','none');
        $(this).next().children().css('display','block');
    });
    $('#menu').css('width','0');
    $('#close').on('click', function () {
        $('#menu').css('width','0');
        $(this).css('display','none');
        $(this).prev().children().css('display','block');
    });
    $('.support').on('click', function() {
        $('.sup').toggleClass('active');
//        if($('.active').val() == null) {
//            $('.account').css('margin-top','0'); 
//            $('.account').css('transition','0.7s');
//        } else $('.account').css('margin-top','160px');
    });
});