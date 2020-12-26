$(document).ready(function(){
  $("#ipSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#room_post_list").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $("")
});