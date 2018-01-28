function msg(str){
  document.myForm.msStatus.value = str;
}

window.document.onmousemove = function(evt){
  if(document.uniqueID){
    evt = event;
  }
  document.myForm.msX.value = evt.x;
  document.myForm.msY.value = evt.y;
}
