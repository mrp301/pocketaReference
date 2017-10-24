//#0032_2つの値を比較

function check(){
  var n1 = document.getElementById("num1").value;
  var n2 = document.getElementById("num2").value;
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);//Float型に変換
  var txt = "大きい値は" + Math.max(n1,n2) + "<br>";
  txt += "小さい値は" + Math.min(n1,n2) + "<br>";
  document.getElementById("result").innerHTML = txt;
}
