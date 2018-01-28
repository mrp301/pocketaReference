function disp(evt){
  var fObj = document.forms[0];
  if(document.uniqueID){
    evt = event;
  }
  fObj.MX.value = evt.x;
  fObj.MY.value = evt.y;
  fObj.CX.value = evt.clientX;
  fObj.CY.value = evt.clientY
  fObj.LX.value = evt.layerX;
  fObj.LY.value = evt.layerY;
  fObj.OX.value = evt.offsetX;
  fObj.OY.value = evt.offsetY;
  fObj.PX.value = evt.pageX;
  fObj.PY.value = evt.pageY;
  fObj.SX.value = evt.screenX;
  fObj.SY.value = evt.screenY;
}
window.document.onmousemove = disp;
