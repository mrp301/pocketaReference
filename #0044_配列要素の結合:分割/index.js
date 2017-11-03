//#0044

var f = new Array("f0","f1","f2");
var k = new Array("k0","k1","k2","k3");
var theConcat = new Array();
var theConcat = f.join(k); //配列fとkを結合してtheConcat配列に格納
var theJoin = k.join("/"); //配列kを[/]で連結
var theSlice = k.slice(1,3); //1番目から3番目までを切り出す
f.splice(0,2,"1969","mrp"); //0番目の要素から1つ削除して[1969]を挿入
var txt = "配列連結 :" +theConcat;
txt += "<br>要素連結 :" +theJoin; 
txt += "<br>要素取出 :" +theSlice;
txt += "<br>要素置換 :" +f[0];  
document.getElementById("result").innerHTML = txt;