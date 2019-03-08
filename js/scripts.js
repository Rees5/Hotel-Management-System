$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var g = document.getElementById('room');
    var room = g.options[g.selectedIndex].value;
    var f = document.getElementById('guest');
    var guest = f.options[f.selectedIndex].value;
    var price = (room * guest);
    var pay = $("input:radio[name=a]:checked").val();
    $("#total").text(price);
    $("#pay").click(function(event){
      event.preventDefault();
      var pin = parseInt(prompt("Input your "  + pay + "  pin"));
      if(pin>=1){
      alert("Confirmed! You have succssefully paid " + price + " to Arjana Hotel");
    } else {
      alert("Invalid pin")
    };
      });
  });
});
