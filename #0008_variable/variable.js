//#0008_変数宣言

var a=1;
var b=2;
var c=3;
d=10;

function changeVar(){
  var b=4; //ローカル変数
  c=5; //グローバル変数
  var d=11; //ローカル変数
}

changeVar();

with(document){
  write("a=" +a+ "<br>");
  write("b=" +b+ "<br>");
  write("c=" +c+ "<br>");
  write("d=" +d+ "<br>");
  //オブジェクトを２通りの呼び出し方で呼び出している。
  //グローバル変数はwindowオブジェクトのプロパティとして割り当てられる。
  write("window['a']=" +window['a']+ "<br>");
  write("window.d=" +window.d+ "<br>");
}


