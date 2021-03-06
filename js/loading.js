var loading = function(imgs, firstPage) {

	var id = this.id;
	var that = this;
	if (this.imgs === undefined) {

		this.imgs = (imgs||[]).length;
		this.loaded = 0;
		window[id] = this;

		for (var i = 0; i < imgs.length; i++) {
			var item = imgs[i];
			var img = new Image;
			img.onload = function() {
                // 递归调用自身
				that.loader();
			};
			img.src = item;
		}
		return this;

	}else {
		this.loaded++;
		$('#per').width(100 * (this.loaded / this.imgs));
		if (this.loaded < this.imgs) {
			return this;
		}
	}

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