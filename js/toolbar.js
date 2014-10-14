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
				$('#dropit').append("<div id='barcmd' class='inbar'>hello world</div>");
				break;
				
				case 'time':
				$('#dropit').append("<div id='bartime' class='inbar'>hello world</div>");
				break;
			}
		}
	};
});