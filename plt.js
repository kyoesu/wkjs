const canvasPlot = document.getElementById('canvas_plt');
const ctx = canvasPlot.getContext("2d");

ctx.font = '20px Arial';
ctx. textAlign = 'left';
ctx. textBaseline = 'top';

//сетка
const canvasPlotWidth = canvasPlot.clientWidth;
const canvasPlotHeight = canvasPlot.clientHeight;

const scaleX=50; 
const scaleY=50; 

const xAxis = Math.round(canvasPlotWidth /scaleX/ 2)*scaleX;
const yAxis = Math.round(canvasPlotHeight /scaleY/ 2)*scaleY;

ctx.beginPath();
ctx.strokeStyle = '#f5f0e8';

for (let i = 0; i <= canvasPlotWidth; i = i + scaleX) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvasPlotHeight);

    ctx.fillText((i-xAxis)/scaleX,i+5,yAxis+5);
}

for (let i = 0; i <= canvasPlotHeight; i = i + scaleY) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvasPlotWidth, i);

    ctx.fillText((yAxis-i)/scaleY,xAxis+5,i+5);
}
ctx.stroke();
ctx.closePath();


//прямые х и у


ctx.beginPath();

ctx.strokeStyle = '#000000';
ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, canvasPlotHeight) ;
ctx.fillText('y',xAxis-20,0)
ctx.moveTo(0, yAxis);
ctx.lineTo(canvasPlotWidth, yAxis);
ctx.fillText('x',canvasPlotWidth-20,yAxis-20)
ctx.stroke();
ctx.closePath();

//график
