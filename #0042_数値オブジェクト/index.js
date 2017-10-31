//#0042

var a = new Number(1969);
var b = new Number("215"); //ダブルクォートで囲っても文字扱いになる。
a = a + 1;
b = b + 1;
var txt = "a =" +a+ "<br>b =" +b; 
document.getElementById("result").innerHTML = txt;