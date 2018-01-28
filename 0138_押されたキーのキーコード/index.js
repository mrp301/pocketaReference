window.document.onkeydown = function(evt){
  if(document.uniqueID) {
    evt = event;
  }
  document.getElementById("kcode").value = evt.keyCode;
}
