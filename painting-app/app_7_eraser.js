// eraser-btn
const eraserBtn = document.getElementById('eraser-btn');

// destroy-btn
const destroyBtn = document.getElementById('destroy-btn');

// mode-btn
const modeBtn = document.getElementById('mode-btn');

// color-option
const colorOptions = Array.from(document.getElementsByClassName('color-option'))

// input range
const lineWidth = document.getElementById('line-width');

// input color
const color = document.getElementById('color');

// canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800

ctx.lineWidth = lineWidth.value;

let isPainting = false;	//line 생성 기본값
let isFilling = false;	//mode-btn 기본값

//mouse event start ↓↓

function onMove(event){
	if(isPainting){	//isPainting이 true일때
		//마우스를 누른상태로 이동하는대로 라인 생성
		ctx.lineTo(event.offsetX, event.offsetY)
		ctx.stroke();
		return;
	}
	//새로운 패스 레이어 생성
	// ctx.beginPath();	//cancelPainting 함수 isPainting = false 아래에 추가해도 같은 기능 동작.
	
	//마우스 있는 곳으로 브러쉬 이동
	ctx.moveTo(event.offsetX, event.offsetY)
}

//마우스를 누른 상태 true
function startPainting(event){
	isPainting = true;
}

//마우스를 뗀 상태 false
function cancelPainting(event){
	isPainting = false;
	ctx.beginPath();
}

canvas.addEventListener('mousemove', onMove)
canvas.addEventListener('mousedown', startPainting)	//mousedown -> 마우스를 누른 상태
canvas.addEventListener('mouseup', cancelPainting)
canvas.addEventListener('mouseleave', cancelPainting)

//fill mode-btn
canvas.addEventListener('click', onCanvasClick)

function onCanvasClick(){
	if(isFilling){
		ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}
}

// input range event start ↓↓

function onLineWidthChange(event){
	ctx.lineWidth = event.target.value;
}

lineWidth.addEventListener('change', onLineWidthChange)

// input color event start ↓↓

function onColorChange(event){
	ctx.strokeStyle = event.target.value;
	ctx.fillStyle = event.target.value;
	// console.log(event.target.value)
}

color.addEventListener('change', onColorChange)

// color-option event start ↓↓

function onColorClick(event){
	// console.dir(event.target.dataset.color)
	const colorValue = event.target.dataset.color; 
	ctx.strokeStyle = colorValue
	ctx.fillStyle = colorValue
	color.value = colorValue //input 요소 색 바꿔주기
}

colorOptions.forEach((color) => color.addEventListener('click', onColorClick));

// mode-btn event start ↓↓

function onModeClick(){
	if(isFilling){
		isFilling = false;
		modeBtn.textContent = 'Fill';
	}else{
		isFilling = true;
		modeBtn.textContent = 'Draw'
	}
	
}

modeBtn.addEventListener('click', onModeClick)

// destroy-btn event start ↓↓

function onDestroyClick(){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

destroyBtn.addEventListener('click', onDestroyClick)

// eraser-btn event start ↓↓

function onEraserClick(){
	ctx.strokeStyle = 'white';
	isFilling = false;
	modeBtn.textContent = 'Fill';
}

eraserBtn.addEventListener('click', onEraserClick)
