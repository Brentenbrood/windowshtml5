$(document).ready(function(){
	$('.iconclose').click(function(){
		
	});
	$('#cmd').draggable({
		handle: ".dragbar",
		zIndex: 100,
		containment:"window",
		stack: "div"
		});
	$('#time').draggable({
		handle: ".dragbar",
		zIndex: 100,
		containment:"window",
		stack: "div"
		});
});

