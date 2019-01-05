/*window.onload = function(){
	var cover = document.getElementById();
	window.onscroll = function(){
		var st = document.documentElement.scrolTOP ||document.body.scrollTop;
		if(st>180){
			cover.style.postion="fixed";
		}
		else{
			cover.style.postion="static";
		}
	}
}*/
var white = document.getElementById("white");
	var green = document.getElementById("green");
	var kuang = document.getElementById("ku");
	var da=document.getElementsByClassName("da")[0];
	var imggg=document.getElementsByClassName('imggg')[0];
	var slider=document.getElementsByClassName("slider")[0];
	var zuoda=document.getElementsByClassName("zuoda")[0];
	var zuoer=document.getElementsByClassName("zuoer")[0];
	var kuang1 = document.getElementsByClassName("kuang1")[0];
	var bus=document.getElementsByClassName("bus")[0];
	var bus1=document.getElementsByClassName("bus")[1];
	var meng=document.getElementsByClassName("meng")[0];
	var cuohao=document.getElementsByClassName("cuohao")[0];
	var capacity1=document.getElementsByClassName("capacity")[0];
	var capacity2=document.getElementsByClassName("capacity")[1];
	var choose=document.getElementById("choose");
	var inp = document.getElementsByClassName("inp")[0];
	var jian=document.getElementsByClassName("jiajian")[0];
	var jia=document.getElementsByClassName("jiajian")[1];
	var duigou1=document.getElementsByClassName("duigou")[0];
	var duigou2=document.getElementsByClassName("duigou")[1];
	
	bus.onclick=function(){
		meng.style.display="block";
	}
	bus1.onclick=function(){
		meng.style.display="none";
	}
	cuohao.onclick=function(){
		meng.style.display="none";
	}
	capacity1.onclick=function(){
		capacity1.className="hongkuang";
		capacity2.className="capacity";
		choose.innerHTML="150ml";
		duigou1.style.display="block";
		duigou2.style.display="none";
	}
	capacity2.onclick=function(){
		capacity2.className="hongkuang";
		capacity1.className="capacity";
		choose.innerHTML="200ml";
		duigou2.style.display="block";
		duigou1.style.display="none";
	}
	
	jian.onclick=function(){
		if(inp.value<2){
			jian.style.cursor="not-allowed";
		}
		else{
			inp.value--;
			jia.style.cursor="pointer";
		}
	}
	jia.onclick=function(){
		if(inp.value>=5)
			jia.style.cursor="not-allowed";
		else{
			inp.value++;
			jian.style.cursor="pointer";
		}
	}
	function my(){
		inp.value=inp.value.replace(/[^\d]/g,'');
		if(inp.value>5||inp.value<1)
			inp.value="";
	}
	white.onmouseover=function(){
		kuang1.innerHTML='<img src="../img/pp0.jpeg">';
		white.className="huangkuang";
		green.className="";
		imggg.innerHTML='<img class="imggg" src="../img/pp0.jpeg">';
	}
	green.onmouseover=function(){
		kuang1.innerHTML='<img src="../img/pp1.jpeg">';
		green.className="huangkuang";
		white.className="";
		imggg.innerHTML='<img class="imggg" src="../img/pp1.jpeg">';
	}
	white.onmouseout=function(){
		imggg.style.display="none";
	}
	green.onmouseout=function(){
		imggg.style.display="none";
	}
	kuang.onmouseover=function(){
		slider.style.display="block";
		imggg.style.display='block';
		da.style.display="block";
	}
	kuang.onmouseout=function(){
		slider.style.display="none";
		imggg.style.display='none';
		da.style.display="none";
	}
	kuang.onmousemove=function(e){
		var l=e.clientX-slider.offsetWidth/2-kuang.offsetLeft-zuoda.offsetLeft;
		var t=e.clientY-slider.offsetHeight/2-kuang.offsetTop-zuoda.offsetTop;
		var ml=kuang.offsetWidth-slider.offsetWidth;
		var mt=kuang.offsetHeight-slider.offsetHeight;
		l=l>ml?ml:l<0?0:l;
		t=t>mt?mt:t<0?0:t;
		slider.style.top=t+"px";
		slider.style.left=l+"px";
		//确定大图位置
		var xishu=imggg.offsetWidth/kuang.offsetWidth;
		imggg.style.left=-l*xishu+"px";
		imggg.style.top=-t*xishu+"px";
	}