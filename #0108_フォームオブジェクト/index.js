var txt = "";
for(var i in document.forms) {
  txt += i +" = "+ document.forms[i] + "<br>";
}
document.getElementById("result").innerHTML = txt;
