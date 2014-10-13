$(document).ready(function(){
	$('.iconclose').click(function(){
		var parent1 = $(this).parent();
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
	function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('#clock span').text(h+":"+m+":"+s).css({});
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}
startTime();
});

