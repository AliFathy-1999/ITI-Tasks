let drawLine= document.getElementById("drawLine");
let drawRect= document.getElementById("drawRect");
let drawCircle = document.getElementById("drawCircle");
let drawShapesDiv = document.getElementById("drawShapesDiv")
let mysvg= document.getElementById("mysvg");
let mysvgLine = document.getElementById("mysvgLine")
let mysvgCircle = document.getElementById("mysvgCircle");
let point = {x:0,y:0}
let spLine = {x:0,y:0}
let epLine = {x:0,y:0}
let arcP={x:0,y:0};
drawRect.addEventListener("click", (e)=>{
    drawShapesDiv.addEventListener("click",DrawRec);
    stopLineEvent();
    stopCirEvent();
})
function stopLineEvent(){
    drawShapesDiv.removeEventListener("mousedown",startDrawLine);
    drawShapesDiv.removeEventListener("mouseup",endDrawLine);
}
function stopRecEvent(){
    drawShapesDiv.removeEventListener("mousedown",DrawRec);
}
function stopCirEvent(){
    drawShapesDiv.removeEventListener("mousedown",DrawCir);
}
// Drew Recytangle
function DrawRec(e){
    point.x=e.offsetX;
    point.y=e.offsetY;
    mysvg.innerHTML=`
        <rect x="${point.x}" y="${point.y}" width="500"height="400" style="fill:rgb(0,0,255);stroke-width:2;stroke:rgb(0,0,0)"/>  
    `
}
//Draw Line
drawLine.addEventListener("click",(e)=>{
    drawShapesDiv.addEventListener("mousedown",startDrawLine);
    drawShapesDiv.addEventListener("mouseup",endDrawLine);
    stopRecEvent();
    stopCirEvent();
})
function startDrawLine(e) {
    spLine.x=e.offsetX;
    spLine.y=e.offsetY;
}
function endDrawLine(e){
    console.log("line");
     epLine.x=e.offsetX;
     epLine.y=e.offsetY;
    mysvgLine.innerHTML=`
    <line x1="${spLine.x}" y1="${spLine.y}" x2="${epLine.x}" y2="${epLine.y}"
    stroke="green" stroke-width="3"
    opacity="0.3"></line>  
   
   `
}
drawCircle.addEventListener("click",(e)=>{
    drawShapesDiv.addEventListener("mousedown",DrawCir);
    stopLineEvent();
    stopRecEvent();
})
function DrawCir(e){
    arcP.x=e.offsetX;
    arcP.y=e.offsetY;
    mysvgCircle.innerHTML=`
    <circle cx="${arcP.x}" cy="${arcP.y}" r="50" 
        stroke="blue" 
        stroke-width="2" 
        fill="red" />
    `

}
