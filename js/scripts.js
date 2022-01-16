//user interface logic
$(document).ready(function(){
  $("#submit").click(function(){
    $(".box-hidden").hide();
  });
  $("#submit").click(function(){
    $(".box-showing").show();
  });
  //show total
  $("#checkout").click(function(){
    $(".box-showing").hide();
  });
  $("#checkout").click(function(){
    $(".ordertotal").show()
    event.preventDefault();
  });
  //add pizza
  $("#add-order").click(function(){
    $(".ordertotal").hide();
  });
  $("#add-order").click(function(){
    $(".box-showing").show()
  });
});

//business logic
function submitForm (event){
  event.preventDefault();
  console.log("test");
  function Pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }
  var size = document.getElementById("size").value;
  var crust = document.getElementById("crust").value;
  //get toppings
  var toppings = [bacon, chicken, steak, mushrooms, capsicum, corn];
  var bacon = document.getElementById("bacon").value;
  var chicken = document.getElementById("chicken").value;
  var steak = document.getElementById("steak").value;
  var mushrooms = document.getElementById("mushrooms").value;
  var capsicum = document.getElementById("capsicum").value;
  var corn = document.getElementById("corn").value;

  var pizzaOrder = new Pizza(size, crust, toppings)
  console.log(pizzaOrder);
}