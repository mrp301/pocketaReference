function disp(evt){
  if(document.uniqueID){evt = event; }
  document.getElementById("result").innerHTML = evt.type;
}
window.document.onmousedown = disp;
window.document.onmouseup = disp;
window.document.onmousemove = disp;
