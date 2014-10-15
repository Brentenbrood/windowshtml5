$(document).ready(function(){
	$( "#dropit" ).droppable({
		tolerance: "pointer",
		hoverClass: "dropeet",
     	drop: function( event, ui ) {
		  var dragid = ui.draggable.attr("id");
		  $('#'+dragid).css({display:'none'});
		  console.log(dragid);
		  putInBar(dragid);
      }
    });
	function putInBar(dragid) {
		if (dragid) {
			switch(dragid) {
				case 'cmd':
				$('#dropit').append("<div id='barcmd' name='"+dragid+"' class='inbar'></div>");
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
	$('#tools li').click(function(){
		console.log($(this).find('span').attr('name'))
	});
});