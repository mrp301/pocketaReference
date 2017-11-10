//#0055

var ele = document.getElementById("result");
var theData = new Array("a","b","c","d");
var myData = theData;//ここの処理意味不明。同じ場所を参照してるだけだから意味がないのでは
theData.shift(); //先頭要素を削除
ele.innerHTML = "先頭要素を削除:" +theData;
myData.unshift("A");//先頭にAを追加
ele.innerHTML += "<br>先頭にAを追加:" +myData;