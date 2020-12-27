$(document).ready(function(){
  // $("#myInput").on("keyup", function() {
  //   var value = $(this).val().toLowerCase();
  //   $(".room_post").filter(function() {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //   });
  // });

  var x ="";


  $(".dropdown-item").on("click",function(){
    

    $(this).addClass("active").siblings().removeClass("active");
    x = $(".active").text();
    return

    
  })

  $(".item a").on("click",function(){
    var value = $(this).text().toLowerCase();
    alert(value)
    $(".room_post").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      
    });
  })

 



  $("#search-btn").on("click",function(){
    x+=" "  + $("#myInput").val().toLowerCase();
    
    $(".room_post").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(x) > -1)
      
    });
    x="";
     
    
  })
});