var price = (room * guest);
$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var g = document.getElementById('room');
    var room = g.options[g.selectedIndex].value;
    var f = document.getElementById('guest');
    var guest = f.options[f.selectedIndex].value;
    $("#total").text(price);
  });
});
$("#pay").click(function(event){
  alert("Confirmed! You have succssefully paid " + price + " to belmond hotel.")
  });
