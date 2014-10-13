$(document).ready(function(){
	$( "#dropit" ).droppable({
		tolerance: "pointer",
		hoverClass: "hover",
		accept: "#cmd",
     	drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( "Dropped!" );
		  console.log('dropped');
      }
    });
});