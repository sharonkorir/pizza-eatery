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
    /*this.toppings = ;*/
  }
  var size = document.getElementById("size").value;
  var crust = document.getElementById("crust").value;
  //get toppings

  function getValue() {
    var topping = [];
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
    console.log(topping);
  }
  
  var getToppings =  getValue();
  console.log(getToppings)

  /*$(function(getToppings){
    $("#checkout").click(function(){
      var val = [];
      $(":checkbox:checked").each(function(i){
        val[i] = $(this).val();
      });
    });
  });*/

  var pizzaOrder = new Pizza(size, crust, toppings)
  console.log(pizzaOrder);
}