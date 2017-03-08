(function($){

	$.fn.extend({
		rippleButton: function(init){
	        var option = {
		        alpha: 0.5,
		        speed: 1.1,
		        callback: function(){}
	        }
	        $.extend(option, init);


			return this.each(function(){
				var me = $(this);

				me.css('position','relative');
				me.css('overflow','hidden');

				me.on('mousedown',function(e){
					var x = e.pageX;
					var y = e.pageY;

					x = x - me.offset().left;
					y = y - me.offset().top;


					var ripple = $('<span></span>');
					ripple.css({
						'display': 'block',
						'position': 'absolute',
						'left': x-2,
						'top' : y-2,
						'background': '#e1e0e4',
						'width': '4px',
						'height': '4px',
						'border-radius': '50%',
						'transform':'scale(0)',
						'opacity' : option.alpha,
						'transition-property': 'all',
						'transition-duration' : option.speed,
						'pointer-events': 'none'
					});

					me.append(ripple);

					setTimeout(function(){
						ripple.css({
							'transform':'scale(100)',
							'opacity' : 0
						});
					},0);

					ripple.on('transitionend',function(){
						ripple.remove();
						option.callback();
					});
				});
			});
		}
	});

})(jQuery);

