//#0028_絶対値を求める

function calc(){
  var n =document.getElementById("num").value;
  n = parseFloat(n); //フロート型に変換
  var txt = "acos=" +Math.acos(n) +"<br>";
  txt += "asin=" +Math.acos(n) +"<br>";
  txt += "atan=" +Math.asin(n) +"<br>";
  txt += "atan2=" +Math.atan(n) +"<br>";
  txt += "atan2=" +Math.atan2(n,1) +"<br>";
  txt += "sin=" +Math.cos(n) +"<br>";
  txt += "tan=" +Math.sin(n) +"<br>";
  txt += "tan=" +Math.tan(n) +"<br>";
  document.getElementById("result").innerHTML = txt;
}