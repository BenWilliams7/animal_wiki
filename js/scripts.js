$(document).ready(function() {
  $("select#zoo").click(function(event) {

  var animal = $("#zoo").val();

  if (animal === 'Turtles') {
    $('.dingos, .armas').hide();
    $(".turtles").show();
  } else if (animal === 'Dingos') {
    $('.turtles, .armas').hide();
    $(".dingos").show();
  } else if (animal === 'Armadillos') {
      $('.turtles, .dingos').hide();
    $(".armas").show();
  }


event.preventDefault();


});
});
