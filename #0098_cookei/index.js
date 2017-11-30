//#0097

function check(){
  var n = document.getElementsByClassName("note").length;
  var col = document.getElementById("lay0").style.backgroundColor;
  var val = document.getElementsByName("uType")[1].value;
  var count = document.getElementsByTagName("div").length; //ページ内のタグ情報を変数に入れる
  var txt = "noteクラスのタグ数 = " +n+ "<br>";
  txt += "IDがlay0の背景色 = " +col+ "<br>";
  txt += "nameがuTypeの値 = " +val+ "<br>";
  txt += "タグ名がdivの総数 = " +count;
  document.getElementById("result").innerHTML = txt;
}