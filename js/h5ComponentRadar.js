/*雷达图组件*/

var h5ComponentRadar = function( name,cfg ){
	
	var component = new h5ComponentBase( name,cfg );
	
	var w = Math.round( cfg.width * 2 * $(window).width() );
	var h = Math.round( cfg.height * 2 * $(window).height() );
	var step = cfg.data.length;
	
	//半径
	var r = w/2;

	(function(){

		// 加入一个画布
		var cns = document.createElement('canvas');
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;
		component.append(cns);

		//  计算一个圆周上的坐标（计算多边形的顶点坐标）
		//  已知：圆心坐标(a,b)、半径 r；角度deg。
		//  rad = ( 2*Math.PI / 360 ) * ( 360 / step ) * i
		//  x = a + Math.sin( rad ) * r;
		//  y = b + Math.cos( rad ) * r;
		//	绘制多边形
		//	多边形顶点坐标
		var isBlue = false;
		for (var j = 10; j > 0; j--) {

			ctx.beginPath();
			for (var i = 0; i < step; i++) {
				var rad = ( 2 * Math.PI / 360 ) * ( 360 / step ) * i;
				var x = r + Math.sin( rad ) * r *( j / 10 );
				var y = r + Math.cos( rad ) * r *( j / 10 );
				ctx.lineTo(x,y);
			}
			ctx.closePath();
			ctx.fillStyle = (isBlue = !isBlue) ? '#99c0ff' : '#f1f9ff';
			ctx.fill();
		}

		//绘制伞骨
		for (var i = 0; i < step; i++) {
			var rad = ( 2 * Math.PI / 360 ) * ( 360 / step ) * i;
			var x = r + Math.sin( rad ) * r;
			var y = r + Math.cos( rad ) * r;
			ctx.moveTo(r,r);
			ctx.lineTo(x,y);

			// 加入数据名称
			var name = $('<div class="name">'+cfg.data[i][0]+'</div>');
			component.append(name);

			name.css('transition','all .5s '+ i*0.2 + 's');

			if (x > w/2) {
				name.css('left', x/2+5);
			}else{
				name.css('right', (w-x)/2+5);
			}
			if (y > h/2) {
				name.css('top', y/2+5);
			}else{
				name.css('bottom', (h-y)/2+5);
			}
			if (cfg.data[i][2]) {
				name.css('color', cfg.data[i][2]);
			}
		}
		ctx.strokeStyle = '#e0e0e0';
		ctx.stroke();		
	})();

	//加入一个画布
	var cns = document.createElement('canvas');
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	ctx.strokeStyle = '#f00';
	//绘制折线(数据层)
	var draw = function( per ){
		if (per >= 1) {
			component.find('.name').css('opacity', 1);
		}
		if (per <= 1) {
			component.find('.name').css('opacity', 0);
		}
		//清空画布
		ctx.clearRect(0,0,w,h);
		for (var i = 0; i < step; i++) {
			var rad = ( 2 * Math.PI / 360 ) * ( 360 / step ) * i;
			var rate = cfg.data[i][1] * per;

			var x = r + Math.sin( rad ) * r * rate;
			var y = r + Math.cos( rad ) * r * rate;

			ctx.lineTo(x,y);
		}
		ctx.closePath();
		ctx.stroke();

		//绘制数据点
		ctx.fillStyle = '#ff7676';
		for (var i = 0; i < step; i++) {
			var rad = ( 2 * Math.PI / 360 ) * ( 360 / step ) * i;
			var rate = cfg.data[i][1] * per;

			var x = r + Math.sin( rad ) * r * rate;
			var y = r + Math.cos( rad ) * r * rate;

			ctx.beginPath();
			ctx.arc(x,y,5,0,2*Math.PI);
			ctx.fill();

		}
	};

	component.on('load',function(){
		//雷达图加载动画
		var s = 0;
		for (var i = 0; i < 100; i++) {
			setTimeout(function(){
				s+=0.01;
				draw(s);
			},i*10+600);
		}
	});
	component.on('leave',function(){
		//雷达图退出动画
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