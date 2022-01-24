
$(".on").click(function (){

  var rain = new Audio("sounds/rain1.mp4");

  if (typeof rain.loop == 'boolean'){

    rain.loop = true;
}
rain.play();
});
$(".on").click(function (){

  var piano = new Audio("sounds/piano1.mp4");

  if (typeof piano.loop == 'boolean'){

    piano.loop = true;
}
piano.play();
});



$(".sound").click(function(){
  var thunder = new Audio("sounds/S.F/thunder.mp4")
  thunder.play();
  $("body").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

});


// bye button
$(".danger").click(function(){

  $(".hidden").hide();

  $(".hide").hide();

  var beast = new Audio("sounds/S.F/beast.mp3")
  beast.play();

  $("#bye").css({"padding":"3% 10%"});
  $(".bye").text("He is coming ....");
$(".bye").css({"margin-left": "5%"});

$(".eye1, .eye2").show();

$("body").addClass("flash-red");
  setTimeout(function(){  $("body").removeClass("flash-red");},200)


});
