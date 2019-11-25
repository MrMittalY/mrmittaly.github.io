var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
var colors=generateRandomColors(6);
var pickedColor=pickColor();
var bgColor="rgb(23, 23, 23)";
var h1color="steelblue";
var easyMode=false,hardMode=true;
colorDisplay.textContent=pickedColor;
colorSquares();

reset.addEventListener("click",function(){
	this.textContent="New Colors";
	if(easyMode){
		modeButtons[0].classList.add("selected");
		modeButtons[1].classList.remove("selected");
		colors=generateRandomColors(3);
	}
	else{
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.add("selected");
		colors=generateRandomColors(6);
	}
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor=h1color;
	messageDisplay.textContent="";
});

modeButtons[0].addEventListener("click",function(){
	reset.textContent="New Colors";
	easyMode=true;
	hardMode=false;
	this.classList.add("selected");
	modeButtons[1].classList.remove("selected");
	colors=generateRandomColors(3);
	for(var i=0;i<3;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	for(var i=3;i<6;i++){
		squares[i].style.display="none";
	}
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor=h1color;
	messageDisplay.textContent="";
});

modeButtons[1].addEventListener("click",function(){
	reset.textContent="New Colors";
	easyMode=false;
	hardMode=true;
	this.classList.add("selected");
	modeButtons[0].classList.remove("selected");
	colors=generateRandomColors(6);
	for(var i=0;i<6;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	for(var i=3;i<6;i++){
		squares[i].style.display="block";
	}
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	h1.style.backgroundColor=h1color;
	messageDisplay.textContent="";
});

function colorSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener("click",function(){
			var clickedColor=this.style.backgroundColor;
			if(clickedColor===pickedColor){
				changeColors(pickedColor);
				messageDisplay.textContent="CORRECT!!";
				reset.textContent="PLAY AGAIN?";
				h1.style.backgroundColor=pickedColor;
			}
			else{
				this.style.backgroundColor=bgColor;
				messageDisplay.textContent="TRY AGAIN!!";
			}
		});
	}
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(n){
	var colors=[];
	for(var i=0;i<n;i++){
		colors[i]="rgb("+pickNumber()+", "+pickNumber()+", "+pickNumber()+")"
	}
	return colors;
}

function pickNumber(){
	var random=Math.floor(Math.random()*256)
	return random;
}