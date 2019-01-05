	var slider = document.getElementsByClassName('slider')[0];
	var box=document.getElementsByClassName("box")[0];
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var gundong=document.getElementsByClassName("gundong")[0];
	var butt=document.getElementsByClassName("butt")[0];
	var qian=document.getElementsByClassName('qian')[0];
	var bang=document.getElementsByClassName("bang")[0];
	var youhui=document.getElementsByClassName("youhui")[0];
	var shouji=document.getElementsByClassName("shouji")[0];
	var gouwuche=document.getElementsByClassName("gouwuche")[0];
	var xuanze=document.getElementsByClassName("xuanze")[0];

/*右侧固定*/
	bang.onmouseover=function(){
		animate(bang,{right:-17});
	}
	youhui.onmouseover=function(){
		animate(youhui,{right:-17});
	}
	shouji.onmouseover=function(){
		animate(shouji,{right:-17});
	}
	gouwuche.onmouseover=function(){
		animate(gouwuche,{right:-17});
	}
	bang.onmouseout=function(){
		animate(bang,{right:-97});
	}
	youhui.onmouseout=function(){
		animate(youhui,{right:-97});
	}
	shouji.onmouseout=function(){
		animate(shouji,{right:-97});
	}
	gouwuche.onmouseout=function(){
		animate(gouwuche,{right:-97});
	}
/*手机充值*/
	xuanze.onchange=function(){
		qian.innerHTML="¥"+this.value;
	}
/*轮播图*/
	var index = 1;
	function next(){
		index++;
		animate(slider,{left:-809*index},function(){
			if(index==7){
				slider.style.left='-809px';
				index=1;
			}
		})
		navchange();
	}
	function prev(){
		index--;
		animate(slider,{left:-809*index},function(){
			if(index==0){
				slider.style.left='-4854px';
				index=6;
			}
		})
		navchange();
	}
	var timer=setInterval(next,3000)
	box.onmouseover=function(){
		clearInterval(timer);
		animate(left,{opacity:90});
		animate(right,{opacity:90});
	}
	box.onmouseout=function(){
		timer=setInterval(next,3000);
		animate(left,{opacity:0});
		animate(right,{opacity:0});
	}
	right.onclick=next;
	left.onclick=prev;
	var onavlist=document.getElementById("nav").children;
	for(var i=0;i<onavlist.length;i++){
		onavlist[i].idx=i;
		onavlist[i].onclick=function(){
			index=this.idx+1;
			animate(slider,{left:-809*index})
			navchange();
		}
	}
	function navchange(){
		for(var i=0;i<onavlist.length;i++){
			onavlist[i].className="";
		}
		if(index==7){
			onavlist[0].className="active";
		}
		else if(index==0){
			onavlist[5].className="active";
		}
		else{
			onavlist[index-1].className="active";
		}
		
	}
/*右侧滚动*/
	var fa=0;
	function nextgun(){
		fa++;
		animategun(gundong,{top:-17*fa},function(){
			if(fa==24){
				fa=0;
				gundong.style.top="0px";
			}
		})
	}
	var timers=setInterval(nextgun,200);
	gundong.onmouseover=function(){
		clearInterval(timers);
	}
	gundong.onmouseout=function(){
		timers=setInterval(nextgun,200);
	}
/*顶部悬浮*/
	window.onload = function(){
	var xuanfu = document.getElementsByClassName("waixuanfu")[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>130){
			xuanfu.style.position = 'fixed';
		}
		else{
			xuanfu.style.position = 'static';
		}
	}
}
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
