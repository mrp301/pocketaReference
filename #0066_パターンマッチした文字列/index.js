//#0066

var reg = new RegExp("(\\w+)\\s(\\w+)","g"); //最大9つまで文字列を参照することができる。
var str = "JavaScript JScript VBScript";
var txt = "結果:" +str.replace(reg,"$2 and $1"); //replaceは文字の置換
txt += "<br>$1:" +RegExp.$1;
txt += "<br>$2:" +RegExp.$2;
document.getElementById("result").innerHTML = txt;