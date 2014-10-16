$(document).ready(function(){
	$( "#dropit" ).droppable({
		tolerance: "pointer",
		hoverClass: "dropeet",
     	drop: function( event, ui ) {
		  var dragid = ui.draggable.attr("id");
		  console.log(dragid);
		  $('#'+dragid).css({display:'none'});
		  console.log(dragid);
		  putInBar(dragid);
      }
    });
	function putInBar(dragid) {
		if (dragid) {
			switch(dragid) {
				case 'youtube':
				$('#dropit').append("<div id='baryoutube' name='"+dragid+"' class='inbar'></div>");
				break;
				
				case 'time':
				$('#dropit').append("<div id='bartime' name='"+dragid+"' class='inbar'></div>");
				break;
			}
		}
	};
	$(document).on('click', ".inbar", function() {
		var idout = $(this).attr('name');
		$('#'+idout).css({display:'block'});
		$(this).css({display:'none'});
	});
	$('#tools li ul li').click(function(){
		console.log($(this).attr('name'));
		var createid = $(this).attr('name');
			addWindow(createid);
	});
});