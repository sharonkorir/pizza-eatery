//user interface logic
$(document).ready(function(){
  $("#submit").click(function(){
    $(".box-hidden").hide();
  });
  $("#submit").click(function(){
    $(".box-showing").show();
  });
  $("#checkout").click(function(){
    $(".box-showing").hide();
  });
  $("#checkout").click(function(){
    $(".ordertotal").show()
  });
  event.preventDefault();
});
