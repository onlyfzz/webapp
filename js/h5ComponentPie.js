/*饼图组件*/

var h5ComponentPie = function( name,cfg ){
	
	var component = new h5ComponentBase( name,cfg );
	
	var w = Math.round( cfg.width * 2 * $(window).width() );
	var h = Math.round( cfg.height * 2 * $(window).height() );
	var step = cfg.data.length;
	
	//半径
	var r = w/2;
	var draw = null;

	//加入一个画布
	function CreateC(){
		var cns = document.createElement('canvas');
		var ctx = cns.getContext('2d');
		cns.width = ctx.width = w;
		cns.height = ctx.height = h;
		component.append(cns);
		return ctx;
	}

	//绘制底层
	function createBottom(){
		var ctx1=new CreateC();
		ctx1.beginPath();
		ctx1.fillStyle = '#f5f5f5';
		ctx1.strokeStyle = '#f5f5f5';
		ctx1.arc(r,r,r,0,2*Math.PI);
		ctx1.fill();
		ctx1.stroke();
	}

	//绘制数据层
	function createData(){
		var colors = ['red','green','orange','blue','gray'];	//备用颜色
		var sAngle = 1.5 * Math.PI;			//设置开始的角度
		var eAngle = 0;						//设置每次循环结束的角度
		var aAngle = 2 * Math.PI; 			//设置整个圆的角度

		var ctx2=new CreateC();

		var data=cfg.data;
		for (var i = 0; i < data.length; i++) {
			var item = data[i];

			var color = item[2] || ( item[2]=colors.pop() );

			eAngle = sAngle + aAngle*item[1];

			ctx2.beginPath();
			ctx2.fillStyle = color;
			ctx2.strokeStyle = color;
			ctx2.lineWidth = 0.1;

			ctx2.moveTo(r,r);
			ctx2.arc(r,r,r,sAngle,eAngle);
			ctx2.fill();
			ctx2.stroke();
			sAngle = eAngle;

			//加入项目文本
			
			var text = $('<div class="text">'+item[0]+'</div>');
			var perData = item[1]*100 + '%';
			var per = $('<div class="per">'+perData+'</div>');
			text.append(per);
			component.append(text);

			var x = r + Math.sin( 0.6*Math.PI - sAngle ) * r;
			var y = r + Math.cos( 0.6*Math.PI - sAngle ) * r;

			if (x > w/2) {
				text.css('left', x/2+5);
			}else{
				text.css('right', (w-x)/2+5);
			}
			if (y > h/2) {
				text.css('top', y/2+5);
			}else{
				text.css('bottom', (h-y)/2+5);
			}
			if (item[2]) {
				text.css('color', item[2]);
			}
		}

	}
	
	//绘制蒙版层
	function createMask(){
		var ctx3 = new CreateC();
		ctx3.fillStyle = '#f5f5f5';
		ctx3.strokeStyle = '#f5f5f5';
		ctx3.lineWidth = 1;

		var sAngle = 1.5 * Math.PI;

		//蒙版层加载
		draw = function( per ){
			ctx3.clearRect(0,0,w,h);
			ctx3.beginPath();

			ctx3.moveTo(r,r);
			if (per <= 0) {
				ctx3.arc(r,r,r,0,2*Math.PI);
				component.find('.text').css('opacity',0);
			}else {
				ctx3.arc(r,r,r,sAngle,sAngle+2*Math.PI*per,true);
			}
			if (per >= 1) {
				component.find('.text').css('opacity',1);
				ctx3.clearRect(0,0,w,h);
			}
			ctx3.fill();
			ctx3.stroke();
		};
	}

	createBottom();
	createData();
	createMask();
	draw(0);

	component.on('load',function(){
		//饼图加载动画
		var s = 0;
		for (var i = 0; i < 100; i++) {
			setTimeout(function(){
				s+=0.01;
				draw(s);
			},i*10+600);
		}
	});
	component.on('leave',function(){
		//饼图退出动画
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