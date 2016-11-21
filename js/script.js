window.onload = function(){
	var stage = document.querySelector(".stage");
	var degX = 0,degY = 0;
	var imgShow = document.querySelectorAll(".img1");
	var imgBtn = document.querySelectorAll(".img0");
	 	
		for(var i = 0;i < imgBtn.length;i++){
			imgBtn[i].index = i;
			var count = 0;
			imgBtn[i].onmousedown = function(){
				if(count % 2 == 0){
				imgShow[this.index].style.transform = "translateY(-220px) scale(1.2)";
				}
				else{
				imgShow[this.index].style.transform = "rotateY(90deg) scale(1)";	
				}
				count++;
			}

		}
	
	
	document.ondragstart = function(){
		return false;
	}
	document.onmousedown = function(e){
		var eve = e || event;
		var mouX = eve.clientX;
		var mouY = eve.clientY;
		document.onmousemove = function(e){
			var eve1 = e || event;
			var mouseX = eve1.clientX;
			var mouseY = eve1.clientY;
			stepX = mouseX - mouX;
			stepY = mouseY - mouY;
			degX -= stepY * 0.4;
			degY += stepX * 0.5;
			var str = "perspective(800px) rotateX(-30deg) rotateX(" + degX + "deg) rotateY(" + degY + "deg)";
			css3Transform(stage,str);
			mouX = mouseX;
			mouY = mouseY;
		}
	}
	document.onmouseup = function(){
		document.onmousemove = function(){
			return false;
		}
	}
	function css3Transform(element,value){
		var arr = ["o","ms","Moz","webkit",""];
		var length = arr.length;
		for(var i = 0; i<length;i++){
			element.style[arr[i] + "Transform"] = value;
		}
	}
}
