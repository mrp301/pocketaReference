//#0089

for(var i in window){
  var ele = document.getElementById("result");
  ele.innerHTML += i +"="+ window[i] +"<br>";
}
