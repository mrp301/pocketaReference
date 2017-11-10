//#0056

var ele = document.getElementById("result");
var theData = new Array("あ","い","う");
var str = theData.toString(); //カンマ区切りの配列をそのまま文字列に変換
ele.innerHTML = "<br> 元の配列内容:" +theData;
ele.innerHTML += "<br> 変換後:" +str;
ele.innerHTML += "<br> 文字の列長:" +str.length;
ele.innerHTML += "<br> 変数の型:" +typeof str;