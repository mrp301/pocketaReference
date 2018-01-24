var ele = document.getElementById("result");
var txt = "";
var fobj = document.forms[0].elements;
for(var i = 0; i < fobj.length; i++) {
  ele.innerHTML += i +"="+ fobj[i].type +"<br>";
}
