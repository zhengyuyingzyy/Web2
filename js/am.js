function animate(obj,json,callback){		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){	
			var isStop = true;
			for (var attr in json){
				if(attr=='opacity'){
					var now = parseInt(getStyle(obj,attr)*100);
				}else{
					var now = parseInt(getStyle(obj,attr));
				}
				
				var speed = (json[attr]-now)/5;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				if (attr=='opacity') {
					obj.style[attr]=(now+speed)/100;
				}else{
					obj.style[attr]=now+speed+'px';
				}
				
				var current = now+speed;
				if(json[attr]!==current){
					isStop = false;
				}
			}					
			if(isStop){
				clearInterval(obj.timer)
				callback&&callback();
			}
	 	},10)
	
	}
	function getStyle(obj,style){
		if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
		}else{
			obj.currentStyle[style];
		}		
	}
	function animategun(obj,json,callback){		
		clearInterval(obj.timers);
		obj.timers = setInterval(function(){	
			var isStop = true;
			for (var attr in json){		
				var now = parseInt(getStyle(obj,attr));
				var speed = -1;
				obj.style[attr]=now+speed+'px';
				var current = now+speed;
				if(json[attr]!==current){
					isStop = false;
				}
			}					
			if(isStop){
				clearInterval(obj.timers)
				callback&&callback();
			}
	 	},10)
	
	}
