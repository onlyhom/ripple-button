(function($){

	$.fn.extend({
		rippleButton: function(){
			return this.each(function(){
				var me = $(this);

				me.css('position','relative');
				me.css('overflow','hidden');

				me.on('mousedown',function(e){
					var x = e.pageX;
					var y = e.pageY;

					x = x - me.offset().left;
					y = y - me.offset().top;

					var ripple = $('<span class="ripple"></span>');
					ripple.css({
						left: x-2,
						top : y-2
					});

					me.append(ripple);

					ripple.on('animationend',function(){
						ripple.remove();
					});
				});
			});
		}
	});

})(jQuery);

