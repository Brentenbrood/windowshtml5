$(document).ready(function(){
	$('.iconclose').click(function(){
		
	});
	$('#cmd').draggable({
		handle: ".dragbar",
		containment:"window",
		start: function(event, ui) 
		       { $(this).css("z-index", 1); }
		});
	$('#time').draggable({
		handle: ".dragbar",
		containment:"window",
		start: function(event, ui) { $(this).css("z-index", 1); }
		});
});

