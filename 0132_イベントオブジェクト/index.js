window.onload = function(event){
  var txt = "";
  for (var i in event ) {
    try{ txt += i+ " = " +event[i]+ "<br>";}catch(e){}
  }
  document.getElementById("result").innerHTML = txt;
}
