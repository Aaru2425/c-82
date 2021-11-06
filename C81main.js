canvas=document.getElementById("my_canvas")
var mouseevent="empty"
var lastpositionofx,lastpositionofy
width_of_line=1
ctx=canvas.getContext("2d")
colour="blue"
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    colour=document.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line").value
    mouseevent="mousedown"
   
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop
    if (mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=width_of_line
        ctx.arc(currentx,currenty,20,0,2*Math.PI)
        ctx.stroke()
    }
    
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
mouseevent="mouseleave"
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}