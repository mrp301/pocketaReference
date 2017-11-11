//#0062

var ele = document.getElementById("result");
var str = "K.FuRuhata";
var str2 = "Presented/By/KaZuhiro/FuRuhata";
for(var i=0; i<str.length; i++) ele.innerHTML += str.charAt(i) + "<br>"; //文字列strのi番目の文字を抜き出す。
ele.innerHTML += "<hr>";

for(i=0; i<str.length; i++) ele.innerHTML += str.substr(0,i) + "<br>"; //0番目からi文字目まで抜き出す
ele.innerHTML += "<hr>";

for(i=0; i<str.length; i++) ele.innerHTML += str.substring(i,i+3) + "<br>"; //0番目からi+3番目まで抜き出す
ele.innerHTML += "<hr>";

for(i=0 ;i<str.length; i++) ele.innerHTML += str.slice(i,99) + "<br>"; //
ele.innerHTML += "<hr>";

for(i=0 ;i<str.length; i++) ele.innerHTML += str.slice(0,-i) + "<br>"; //
ele.innerHTML += "<hr>";

var conv = str2.split("/"); //指定文字で分割
for(i=0; i<conv.length; i++) ele.innerHTML += conv[i] + "<br>"; //分割した文字は配列に格納される
