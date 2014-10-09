$(document).ready(function(){
	$('.iconclose').click(function(){
		var parent1 = $(this).parent()
		$(parent1).parent().css({display:'none'});
		
	});
	$('#cmd').draggable({
		handle: ".dragbar",
		containment:"window",
		stack: "div"
		});
	$('#time').draggable({
		handle: ".dragbar",
		containment:"window",
		stack: "div"
		});
});

