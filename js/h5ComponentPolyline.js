/*折线图对象*/

var h5ComponentPolyline = function( name,cfg ){
	var component = new h5ComponentBase( name,cfg );
	
	var w = Math.ceil( cfg.width * 2 * $(window).width() );
	var h = Math.ceil( cfg.height * 2 * $(window).height() );

	// 绘制网格线
	(function(){

		// 加入一个画布,作为网格线背景
		var cns = document.createElement('canvas');
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;

		// 水平网格线
		var step = 10;
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#aaa";

		window.ctx = ctx;
		for (var i = 0; i < step+1; i++) {

			var y = parseInt((h/step) * i);

			ctx.moveTo(0,y);
			ctx.lineTo(w,y);
		}

		// 垂直网格线 (根据项目个数)
		step = cfg.data.length+1;
		nameW = w/step>>0;
		for (var i = 0; i < step+1; i++) {

			var x = parseInt(w/step*i);

			ctx.moveTo(x,0);
			ctx.lineTo(x,h);

			// 项目名称
			if (cfg.data[i]) {
				var name = $('<div class="name">'+cfg.data[i][0]+'</div>');
				name.css({
					'width': nameW/2,
					'left' : x/2+nameW/4
				});
				component.append(name);
			}
		}
		ctx.stroke();
		component.append(cns);
	})();

	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);
	/**
	 * 绘制折线和阴影
	 * @param {float} per 0到1之间的数据,根据这个值绘制状态 
	 * @return {DOM} component
	 */
	var draw = function( per ){

		//清空画布
		ctx.clearRect(0,0,w,h);

		ctx.beginPath();
		ctx.lineWidth = 3;
		ctx.strokeStyle = '#ff8878';

		// 画点
		var x = 0,
		 	y = 0,
		 	perW= w/(cfg.data.length+1);

		for(var i=0;i< cfg.data.length;i++) {
			var item = cfg.data[i];

			x = perW*(i+1);
			y = h*(1-item[1]*per);
			ctx.moveTo(x,y);
			ctx.arc(x,y,5,0,2*Math.PI);
		}

		// 连线
		ctx.moveTo(perW,h * (1-cfg.data[0][1]*per) );
		for(var i=0;i< cfg.data.length;i++) {
			var item = cfg.data[i];

			x = perW*(i+1);
			y = h*(1-item[1]*per);
			ctx.lineTo(x,y);
		}

		ctx.stroke();
		ctx.strokeStyle = 'rgba(255, 108, 112, 0)';

		// 绘制阴影
		ctx.lineTo(x,h);
		ctx.lineTo(perW,h);
		ctx.fillStyle = 'rgba(255, 108, 112, 0.2)';
		ctx.fill();
		// 写数据
		for(var i=0;i< cfg.data.length;i++) {
			var item = cfg.data[i];

			x = perW*(i+1);
			y = h*(1-item[1]*per);
			ctx.moveTo(x,y);
			ctx.font = "24px arial";
			ctx.fillStyle = item[2] ? item[2]: '#595959'; 
			var text = (item[1]*100>>0)+'%';
			ctx.fillText( text,x-5,y-10);
		}

		ctx.stroke();
	};

	component.on('load',function(){
		//折线图加载动画
		var s = 0;
		for (var i = 0; i < 100; i++) {
			setTimeout(function(){
				s+=0.01;
				draw(s);
			},i*10+600);
		}
	});
	component.on('leave',function(){
		//折线图退出动画
		var s = 1;
		for (var i = 0; i < 100; i++) {
			setTimeout(function(){
				s-=0.01;
				draw(s);
			},i*10);
		}
	});
	return component;
};