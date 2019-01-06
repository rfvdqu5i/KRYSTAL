$(function(){
   $('#addItem').on('click', function () {
        var newTodoText = $('#newTodo').val();
        if(newTodoText != "") {
            $('#todos').append('<li>' + '<i class="fas fa-check check"></i>' + '<span>' + newTodoText  + '</span>' +'<i class="fas fa-times cancel"></i>' + '</li>');
            $('#newTodo').val("");
        } else alert("No content yet");
    });
    $('#todos').on('click', '.cancel', function () {
        $(this).parent().toggleClass('done');
        if($('.done').val() == null) {
            $(this).prev().prev().css('opacity','0');    
        } else $(this).prev().prev().css('opacity','1');
    }); 
});