$(document).ready(function(){
    $('input[name=animalSubmit]').click(function(){
        var toAdd = $('input[name=animalItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
	
	$(document).on('click','.item',function() {
       $(this).remove(); 
    });
});