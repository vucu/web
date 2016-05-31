var main = function() {
  $('form').submit(function() {
    // Store comments
    var comment = $('input[id=comment]').val();
  
    // Prepend comments to list
    if(comment !== "") {
      var html = $('<li>').text(comment);
      html.prependTo('.comments');
    }

    // Clear
    $('input[id=comment]').val("");
    
    return false;
  });
};

$(document).ready(main);