$(document).ready(function() {
  
  $( "#tabs" ).tabs();

  $("#tabs-toggle").click(function() {
    $("#tabs").toggle(500);
  });

});
