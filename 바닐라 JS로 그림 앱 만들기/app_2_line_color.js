const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
	"#55efc4",
	"#81ecec",
	"#74b9ff",
	"#a29bfe",
	"#ffeaa7",
	"#fab1a0",
	"#ff7675",
	"#fd79a8",
	"#dfe6e9"
];

function onClick(event){
	ctx.beginPath();
	ctx.moveTo(0,0);
	const color = colors[Math.floor(Math.random()*colors.length)];
	ctx.strokeStyle = color;
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();
}

canvas.addEventListener('mousemove', onClick)