var main = function() {
  $('form').submit(function() {
    // Store comments
    var comment = $('input[id=comment]').val();
  
    // Prepend comments to list
    if(comment !== "") {
		var html = $('<li>').text(comment);
		html.prependTo('.comments');
	  
		// Call ajax action
		var ajaxurl = 'ajax.php';
		var buttonValue = $('button[name=btn-post]').val();
		var data =  {'action': buttonValue, 'comment':comment};
		$.post(ajaxurl, data, function (data, status) {});
    }

    // Clear
    $('input[id=comment]').val("");
    
    return false;
  });
};

$(document).ready(main);