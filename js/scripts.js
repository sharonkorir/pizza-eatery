//user interface logic
$(document).ready(function(){
  //open form
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
  function Pizza(size, crust, topping, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = topping;
    /*this.total = total;*/
  }
  var size = document.getElementById("size").value;
  var crust = document.getElementById("crust").value;
  //getValue();
  //get toppings
  //function getValue() {
  var topping = []
  var bacon = document.getElementById("bacon")
  if(bacon.checked){
    console.log("bacon");
    topping.push(bacon.value);
  }
  var chicken = document.getElementById("chicken")
  if(chicken.checked){
      topping.push(chicken.value);
  }
  var steak = document.getElementById("steak")
  if(steak.checked){
    topping.push(steak.value);
  }
  var mushrooms = document.getElementById("mushrooms")
  if(mushrooms.checked){
    topping.push(mushrooms.value);
  }
  var capsicum = document.getElementById("capsicum")
  if(capsicum.checked){
    topping.push(capsicum.value);
  }
  var corn = document.getElementById("corn")
  if(corn.checked){
    topping.push(corn.value);
  }
  
  //pizza size cost
  var sizeCost = [500, 700, 1200]
  var crustCost = [100, 150, 200]
  var toppingCost = topping.length*50;
  if(size == regular){
    return sizeCost[0];
  }
  var total = sizeCost + crustCost + toppingCost;

  
  var pizzaOrder = new Pizza(size, crust, topping, total);
  console.log(pizzaOrder)

  //delivery
  var delivery = document.getElementById("delivery").value;
  console.log(delivery);
  if(deliver.selected){
    var location = prompt("Enter your address");
    if(location == ""){
      alert("Enter valid address")
    
    }else{
      alert("Your order will be delvered to " + location);
    }
  }

  //alert cost
  
}