/*柱状图对象*/

var h5ComponentBar = function( name,cfg ){
	var component = new h5ComponentBase( name,cfg );
	$.each(cfg.data,function( idx,item ){

		var line = $('<div class="line"></div>'),
			name = $('<div class="name"></div>'),
			rate = $('<div class="rate"></div>'),
			bg = $('<div class="bg"></div>'),
			per = $('<div class="per"></div>');

		var width = item[1]*100 + '%';

		rate.width('50%');
		bg.width(width);
		rate.append(bg);
		item[2] && bg.css('background', item[2]);
		name.text(item[0]);
		per.text((item[1]*100).toFixed(2)+'%');
		line.append(name).append(rate).append(per);
		component.append(line);
	});
	return component;
};