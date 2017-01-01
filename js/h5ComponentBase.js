/*基本图文组件对象*/
var h5ComponentBase = function(name,cfg){
	var cfg = cfg||{};

	var cls = ' h5-component-'+cfg.type;
	var	component = $('<div class="h5-component '+cls+' h5-component-name-'+name+'"></div>');

	var cWidth = Math.round(cfg.width*$(window).width());
	var cHeight = Math.round(cfg.height*$(window).height());

	cfg.text   && component.text(cfg.text);
	cfg.width  && component.width(cWidth);
	cfg.height && component.height(cHeight);

	cfg.css    && component.css(cfg.css);
	cfg.bg	   && component.css('backgroundImage','url('+cfg.bg+')');

	if (cfg.center === true) {

		component.css({
			left: '50%',
			marginLeft: -Math.round(cfg.width/2*$(window).width())+'px'
		});
	}
	
	if (typeof cfg.click === 'function') {
		component.on('click',cfg.click);
	}

	component.on('load',function(){
		setTimeout(function(){
			component.removeClass(cls+'-leave').addClass(cls+'-load');
			component.animate(cfg.animateIn);
		},cfg.delay || 0);
		return false;
	});
	
	component.on('leave',function(){
		if (cfg.animateOut) {
			component.animate(cfg.animateOut);
		}
		component.removeClass(cls+'-load').addClass(cls+'-leave');
		return false;
	});
 	return component;
};
