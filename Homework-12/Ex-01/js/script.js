$(function(){
    $('.image').on('click', function () {
        $('#lightbox').fadeIn(1000);
        var link = $(this).children().attr('src');
        var description = $(this).children().attr('alt');
        $('.lightbox-image').attr('src', link);
        $('.alt').append('<p>' + description + '</p>');
    });
    
    $('.cancel').on('click', function () {
        $('#lightbox').fadeOut(1000);
        $('.alt').empty();
    });
    
    $('#overlay').on('click', function () {
        $('#lightbox').fadeOut(1000);
        $('.alt').empty();
    }); 
});