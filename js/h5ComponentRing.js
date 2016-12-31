/*饼图组件*/

var h5ComponentRing = function( name,cfg ){
	
	cfg.type = 'pie';
	if (cfg.data.length>1) {
		cfg.data=[cfg.data[0]];
	}
	var component = new h5ComponentPie( name,cfg );
	
	var mask = $('<div class="mask"></div>');
	var text = component.find('.text');
	text.css({
		left: '50%',
		top: '50%'
	});
	component.append(mask);
	return component;
}; 