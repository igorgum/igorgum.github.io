$(document).ready(function() {
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
  $(".button-collapse").sideNav({closeOnClick: true});
  $('.carousel').carousel();
  $('.materialboxed').materialbox();
});


//drag cancel e redirect
var dragging = false;
$(".carousel").on("touchmove", function(){
      dragging = true;
});
$(".carousel").on("touchend", function(){
      if (dragging)
		  dragging = false;
          return;
	$(".carousel").on("touchstart", function(){
		dragging = false;
	});
});

function redirecionar(link){
	if(dragging===false){
		window.location = link;
	}
}