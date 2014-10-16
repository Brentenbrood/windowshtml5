function addWindow(createid) {
	if (createid) {
		switch(createid) {
			case 'youtube':
			console.log($('.youtube').length);
			var $element = $('<div id="youtube" data-id="1"><div class="dragbar"><div class="icongear"><span class="ui-icon ui-icon-info"></span></div><div class="iconminus"><span class="ui-icon ui-icon-circle-minus"></span></div><div class="iconclose"><span class="ui-icon ui-icon-circle-close"></span></div></div><div id="youtubeinside"><iframe src="http://www.youtube.com/embed/p2H5YVfZVFw" frameborder="0" allowfullscreen></iframe></div></div>');
			break;
			case 'time':
			var $element = $('<div id="time"><div class="dragbar"><div class="icongear"><span class="ui-icon ui-icon-info"></span></div><div class="iconminus"><span class="ui-icon ui-icon-circle-minus"></span></div><div class="iconclose"><span class="ui-icon ui-icon-circle-close"></span></div></div><div id="clock"><span></span></div></div></div>');
			break;
		}
		$element.draggable().resizable();
		$('#content').append($element);
	}
}