/*内容管理对象*/
var H5 = function(){
	this.id = ('h5_'+Math.random()).replace('.','');
	this.el = $('<div class="h5" id="'+this.id+'"></div>').hide();
	this.page=[];
	$('body').append(this.el);

	/*新增一个页*/
	/**
	 * @param {string} name 组件的名称,加入到className中	
	 * @param {string} text 页内的默认文本
	 * @return {H5} H5对象,支持链式调用
	 */
	this.addPage = function( name , text ){
		var page=$('<div class="h5-page section"></div>');
		if (name!==undefined) {
			page.addClass('h5-page-'+name);
		}
		if (text!==undefined) {
			page.text(text);
		}
		this.el.append(page);
		this.page.push(page);
		if (typeof this.whenAddPage === 'function') {
			this.whenAddPage();
		}
		return this;
	};
	/*新增一个组件*/
	this.addComponent = function(name,cfg){
		var cfg = cfg||{};
		cfg = $.extend( {type:'base'},cfg );
		var component=null;//定义一个变量存储组件元素
		var page = this.page.slice(-1)[0];

		switch(cfg.type){
			case 'base':
				component = new h5ComponentBase(name,cfg);
				break;
			case 'polyline':
				component = new h5ComponentPolyline(name,cfg);
				break;
			case 'bar':
				component = new h5ComponentBar(name,cfg);
				break;
			case 'bar-v':
				component = new h5ComponentBarV(name,cfg);
				break;
			case 'pie':
				component = new h5ComponentPie(name,cfg);
				break;
			case 'radar':
				component = new h5ComponentRadar(name,cfg);
				break;
			case 'ring':
				component = new h5ComponentRing(name,cfg);
				break;
			case 'point':
				component = new h5ComponentPoint(name,cfg);
				break;
			default:
				break;
		}
		page.append(component);
		return this;
	};
	/*h5对象初始化呈现*/
	this.loader = function( firstPage ){
		this.el.fullpage({
			onLeave: function(index,nextIndex,derection){
				$(this).find('.h5-component').trigger('leave');
			},
			afterLoad: function(anchorLink ,index){
				$(this).find('.h5-component').trigger('load');
			}
		});
		this.el.show();
		this.page[0].find('.h5-component').trigger('load');
		if (firstPage) {
			$.fn.fullpage.moveTo( firstPage );
		}
	};
	this.loader = typeof loading=='function' ? loading : this.loader; 
	return this;
};