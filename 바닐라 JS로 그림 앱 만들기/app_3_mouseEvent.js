const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

let isPainting = false;

function onMove(event){
	if(isPainting){	//isPainting이 true일때
		//마우스를 누른상태로 이동하는대로 라인 생성
		ctx.lineTo(event.offsetX, event.offsetY)
		ctx.stroke();
		return;
	}
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
}


canvas.addEventListener('mousemove', onMove)
canvas.addEventListener('mousedown', startPainting)	//mousedown -> 마우스를 누른 상태
canvas.addEventListener('mouseup', cancelPainting)
canvas.addEventListener('mouseleave', cancelPainting)