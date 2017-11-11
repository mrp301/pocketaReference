//#0062

var ele = document.getElementById("result");
var str = "K.FuRuhata";
var str2 = "Presented/By/KaZuhiro/FuRuhata";
for(var i=0; i<str.length; i++) ele.innerHTML += str.charAt(i) + "<br>"; //文字列strのi番目の文字を抜き出す。
ele.innrtHTML += "<hr>";

for(i=0; i<str.length; i++) ele.innerHTML += str.substr(0,i) + "<br>"; //0番目からi文字目まで抜き出す
ele.innrtHTML += "<hr>";

for(i=0; i<str.length; i++) ele.innertHTML += str.substring(i,i+3) + "<br>"; //0番目からi+3番目まで抜き出す
ele.innrtHTML += "<hr>";