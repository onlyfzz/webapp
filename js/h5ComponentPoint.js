/*散点图表组件对象*/

var h5ComponentPoint = function( name,cfg ){
	var component = new h5ComponentBase( name,cfg );
	var base = cfg.data[0][1];

	$.each( cfg.data,function( idx,item ){

		var baseper = item[1]/base;
		if ( baseper < 1 ) {
			per=1.5*baseper*100+'%';
		}else{
			per=baseper*100+'%';
		}
		var point = $('<div class="point point-'+idx+'"></div>');

		var name = $('<div class="name">'+item[0]+'</div>');

		var rate = $('<div class="rate">'+(item[1]*100+'%')+'</div>');

		name.append(rate);
		point.append(name);

		point.width(per).height(per);

		if (item[2]) {
			point.css('backgroundColor',item[2]);
		}
		if (item[3]!== undefined && item[4]!== undefined) {
			point.css({
				'left':item[3],'top':item[4]
			});
		}
		point.css('transition','all 1s '+0.5*idx+'s');
		component.append(point);
	} );
	component.find('.point').eq(0).addClass('clicked');
	component.on('click','.point',function(){
		component.find('.point').removeClass('clicked');
		$(this).addClass('clicked');
	});
	return component;
};