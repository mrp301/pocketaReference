//#0028_絶対値を求める

function calc(){
  var n = document.getElementById("num").value;
  n = parseFloat(n); //フロート型に変換
  var txt = "切り上げ=" +Math.ceil(n) +"<br>";
  txt += "切り捨て=" +Math.floor(n) +"<br>";
  txt += "四捨五入=" +Math.round(n) +"<br>";
  document.getElementById("result").innerHTML = txt;
}
