let myCanvas = document.getElementById("myCanvas");
let pen = myCanvas.getContext("2d");
let drawBtn = document.getElementById("drawByHand"); 
let drawLine= document.getElementById("drawLine");
let drawRect= document.getElementById("drawRect");
let eraser = document.getElementById("Eraser");
let drawCircle = document.getElementById("drawCircle");
let objectStyle = document.getElementById("object-style");
let fillStyle = document.getElementById("fill-style");
let stokeStyle = document.getElementById("stoke-style");
let rangevalue = document.getElementById("rangevalue");
let thickness = document.getElementById("thickness");
rangevalue.innerHTML=thickness.value
myCanvas.style.width="90%"
let drawStatus = false;
let eraseStatus = false;
let Startpoint = {x:0,y:0,}
let Endpoint = {x:0,y:0,}
let spLine = {x:0,y:0}
let epLine = {x:0,y:0}
let spRect = {x:0,y:0}
let arcP = {x:0,y:0};
let spE = {x:0,y:0}
let epE = {x:0,y:0}

thickness.oninput=function(e){
    rangevalue.innerHTML =  thickness.value;
}
myCanvas.style.cursor="not-allowed"
myCanvas.removeEventListener("mousedown",startDraw);
myCanvas.removeEventListener("mouseup",endDraw);
myCanvas.removeEventListener("mousemove",continueDraw);
//**************************Stop Events********************************
function stopFreeDrawEvent() {
    myCanvas.removeEventListener("mousedown",startDraw);
    myCanvas.removeEventListener("mouseup",endDraw);
    myCanvas.removeEventListener("mousemove",continueDraw);
}
function stopLineEvent(){
    myCanvas.removeEventListener("mousedown",startDrawLine);
    myCanvas.removeEventListener("mouseup",endDrawLine);
}
function stopRecEvent(){
    myCanvas.removeEventListener("mousedown",DrawRec);
}
function stopCirEvent(){
    myCanvas.removeEventListener("mousedown",DrawCir);
}
function stopEraser(){
    myCanvas.removeEventListener("mousedown",startErase);
    myCanvas.removeEventListener("mouseup",endErase);
    myCanvas.removeEventListener("mousemove",continueErase);
}
//**************************Draw (Free hand)********************************
drawBtn.addEventListener("click",(e)=>{
    myCanvas.style.cursor="crosshair"
    myCanvas.addEventListener("mousedown",startDraw);
    myCanvas.addEventListener("mouseup",endDraw);
    myCanvas.addEventListener("mousemove",continueDraw);
    stopLineEvent();
    stopRecEvent();
    stopCirEvent();
    stopEraser();
})
function startDraw(e) {
    pen.beginPath();
    Startpoint.x=e.offsetX;
    Startpoint.y=e.offsetY;
    pen.moveTo(Startpoint.x,Startpoint.y);
    pen.strokeStyle=stokeStyle.value || "black";
    pen.lineWidth=thickness.value;
    drawStatus=true;
}
function endDraw(e){
    drawStatus=false;
}
function continueDraw(e) {
    if (drawStatus) {
        Endpoint.x=e.offsetX;
        Endpoint.y=e.offsetY;
        pen.lineTo(Endpoint.x,Endpoint.y);
        pen.stroke();
    }   
}
// **************************Draw Line********************************
drawLine.addEventListener("click",(e)=>{
    myCanvas.style.cursor="crosshair"
    myCanvas.addEventListener("mousedown",startDrawLine);
    myCanvas.addEventListener("mouseup",endDrawLine);
    stopFreeDrawEvent();
    stopRecEvent();
    stopCirEvent();
    stopEraser();
})
function startDrawLine(e) {
    //Fillcolor="black",stokeColor="black"
    pen.beginPath();
    spLine.x=e.offsetX;
    spLine.y=e.offsetY;
    pen.lineWidth="4"
    pen.strokeStyle=stokeStyle.value;
    pen.lineWidth=thickness.value;
    pen.moveTo(spLine.x,spLine.y);
}
function endDrawLine(e){
    epLine.x=e.offsetX;
    epLine.y=e.offsetY;
    pen.lineTo(epLine.x,epLine.y);
    pen.strokeStyle=stokeStyle.value;
    pen.stroke();
}
// **************************Draw Rectangle********************************
drawRect.addEventListener("click",(e)=>{
    myCanvas.style.cursor="crosshair"
    myCanvas.addEventListener("mousedown",DrawRec);
    stopFreeDrawEvent();
    stopLineEvent();
    stopCirEvent();
    stopEraser();
})
function DrawRec(e) {
    pen.beginPath();
    spRect.x=e.offsetX;
    spRect.y=e.offsetY;
    pen.rect(spRect.x,spRect.y,150,75);
    pen.strokeStyle=stokeStyle.value;
    pen.fillStyle=fillStyle.value;
    pen.lineWidth=thickness.value;
    pen.fillRect(spRect.x,spRect.y,150,75)
    pen.stroke();
}
// **************************Draw Circle********************************
drawCircle.addEventListener("click",(e)=>{
    myCanvas.style.cursor="crosshair"
    myCanvas.addEventListener("mousedown",DrawCir);
    stopFreeDrawEvent();
    stopLineEvent();
    stopRecEvent();
    stopEraser();
})
function DrawCir(e) {
    pen.beginPath();
    arcP.x=e.offsetX;
    arcP.y=e.offsetY;
    pen.arc(arcP.x,arcP.y,50,0,2*Math.PI);
    pen.strokeStyle=stokeStyle.value;
    pen.fillStyle=fillStyle.value;
    pen.lineWidth=thickness.value;
    pen.fill();
    pen.stroke();
}
// **************************Eraser********************************
eraser.addEventListener("click",(e)=>{
    myCanvas.style.cursor="crosshair"
    myCanvas.addEventListener("mousedown",startErase);
    myCanvas.addEventListener("mouseup",endErase);
    myCanvas.addEventListener("mousemove",continueErase);
    stopFreeDrawEvent();
    stopLineEvent();
    stopRecEvent();
    stopCirEvent();
})
function startErase(e) {
    pen.beginPath();
    spE.x=e.offsetX;
    spE.y=e.offsetY;
    pen.moveTo(spE.x,spE.y);
    pen.strokeStyle="white"
    pen.lineWidth=thickness.value
    eraseStatus=true;
}
function endErase(e){
    eraseStatus=false;
}
function continueErase(e) {
    if (eraseStatus) {
        epE.x=e.offsetX;
        epE.y=e.offsetY;
        pen.lineTo(epE.x,epE.y);
        pen.stroke();
    }   
}