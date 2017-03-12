window.RippleButton = (function() {

	//通过向上迭代offsetParent,可以计算出相对于document的偏移量，也就是相对与页面的偏移量。
	function getOffsetSum(dom){
		var top  = 0,
			left = 0;
		while(dom){
			top += dom.offsetTop;
			left += dom.offsetLeft;
			dom = dom.offsetParent;
		}
		return {
			top  : top ,
			left : left
		}
	}

	function RippleButton(str, config){
		this.triggers = this.getTriggers(str);
		this.transitionEnd = config.transitionEnd ? config.transitionEnd : function(){};
		this.alpha = config.alpha ? config.alpha : '0.5';
		this.speed = config.speed ? config.speed : '1.1s';
		this.init(config);
	}

	RippleButton.prototype = {
		constructor: RippleButton,
		init: function(config){
			var _this = this;
			for(var i=0; i<_this.triggers.length; i++){
				(function (i) {
					_this.triggers[i].style.position = 'relative';
					_this.triggers[i].style.overflow = 'hidden';

					_this.triggers[i].addEventListener('mousedown',function(event){
						var x = event.pageX;
						var y = event.pageY;

						var offset = getOffsetSum(_this.triggers[i]);
						x = x - offset.left;
						y = y - offset.top;

						var ripple = document.createElement("span");
						ripple.style.display = 'block';
						ripple.style.position = 'absolute';
						ripple.style.left = (x-2)+'px';
						ripple.style.top = (y-2)+'px';
						ripple.style.background = 'white';
						ripple.style.width = '4px';
						ripple.style.height = '4px';
						ripple.style.borderRadius = '50%';
						ripple.style.transform = 'scale(0)';
						ripple.style.opacity = config.alpha;
						ripple.style.transitionProperty = 'all';
						ripple.style.transitionDuration = config.speed;
						ripple.style.pointerEvents = 'none';

						_this.triggers[i].appendChild(ripple);

						setTimeout(function(){
							ripple.style.transform = 'scale(100)';
							ripple.style.opacity = 0;
						}, 0);

						var singleton = true;
						//因为有两个transition 所以会触发两次
						ripple.addEventListener('transitionend',function(){
							if(singleton){
								_this.triggers[i].removeChild(this);
								_this.transitionEnd();
								singleton = false;
							}
						});
					});
				})(i);
			}

		},
		getTriggers: function(str){
			if(str.indexOf('#') >= 0){
				var id = str.slice(1);
				return [document.getElementById(id)];
			}else if(str.indexOf('.') >= 0){
				var name = str.slice(1);
				return document.getElementsByClassName(name);
			}else{
				return document.getElementsByTagName(str);
			}
		}
	}

	return RippleButton;
})();




