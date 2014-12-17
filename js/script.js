var dragndrop = (function(){
	var myX ='';
	var myY ='';
	var artWork = '';

function resetZ(){
	var elements = document.querySelectorAll('img');
	for (var i = elements.length -1; i >=0; i--){
		elements[i].style.zIndex = 5;
	};
}

//Create a function and an event listener for the start drag event.
function moveStart(e){
	artWork = e.target;
	//if e.offsetX is undefined, it is e.layerX, otherwise it is e.offsetX
	myX = e.offsetX === undefined ? e.layerX : e.offsetX;
	myY= e.offsetY === undefined ? e.layerY : e.offsetY;
	resetZ();
	artWork.style.zIndex = 10;
}

//function keeps track of what happens when you drag and put an image on top of another image.
function moveDragOver(e){
	e.preventDefault();
}

//function executes when drag has ended
function moveDrop(e){
	//prevent default prevents browsers from freaking out when image is dropped into another image.
	e.preventDefault();
	artWork.style.left = e.pageX - myX + "px";
	artWork.style.top = e.pageY - myY + "px";
}
//Create an event listener for the start drag event and attach to the body tag
	document.querySelector('body').addEventListener('dragstart', moveStart, false);
	document.querySelector('body').addEventListener('dragover', moveDragOver, false);
	document.querySelector('body').addEventListener('drop', moveDrop, false);

})();

