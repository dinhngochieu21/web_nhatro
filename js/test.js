$(document).ready(function(){
  // $("#myInput").on("keyup", function() {
  //   var value = $(this).val().toLowerCase();
  //   $(".room_post").filter(function() {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //   });
  // });

  $(".dropdown-item").on("click",function(){
    var value = $(this).text().toLowerCase();
    console.log(value);
    $(".room_post").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  })

  $("#search-btn").on("click",function(){
    var value = $("#myInput").val().toLowerCase();
    var places = $("#place").val().toLowerCase();
    $(".room_post").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      
    });
  })
});