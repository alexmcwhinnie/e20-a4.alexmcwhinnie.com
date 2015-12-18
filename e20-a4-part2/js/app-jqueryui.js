$(function() {

  //Draggable Interaction
  $("#cromulon").draggable();

  //Slider Widget
  $("#slider").slider({
    value:1,
    min: 0,
    max: 1,
    step: 0.1,
    slide: function( event, ui ) {
      $("#cromulon").css("opacity", ui.value)
      var value = $( "#slider" ).slider( "value" );
      $("#value").text("Cromulon Opacity: " + $( "#slider" ).slider( "value" ));
    }
  });

  //Color Animation Effect
  var state = true;
  $("#cromulon").click(function() {
    if ( state ) {
      $("header").animate({
         backgroundColor: "#248f24",
      }, 1000 ), $("#cromulon").css("backgroundImage", "url(images/cromulon_happy.png)");
    } else {
      $( "header" ).animate({
        backgroundColor: "#fff",
      }, 1000 ), $("#cromulon").css("backgroundImage", "url(images/cromulon.png)");
    }
    state = !state;
  });

});