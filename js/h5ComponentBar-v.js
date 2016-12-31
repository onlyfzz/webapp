/*柱状图垂直对象*/

var h5ComponentBarV = function( name,cfg ){
	var component = new h5ComponentBar( name,cfg );
	component.find('.rate').each(function() {
		$(this).append($(this).next());
	});

	var width = 1/cfg.data.length*100+'%';
	component.find('.line').width(width);

	$.each(cfg.data,function( idx,item ){

		var height = item[1]*100 + '%';

		component.find('.rate').eq(idx).width('1.5rem').height(height);
		component.find('.bg').eq(idx).width('100%');
		component.find('.per').eq(idx).text(item[3]);
	});
	return component;
};