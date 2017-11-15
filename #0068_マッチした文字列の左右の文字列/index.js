//#0068

var ele = document.getElementById("result");
var myRE = new RegExp("(MZ)");
var str = "SHARP!MZ-2861X67000";
var data = str.match(myRE);
ele.innerHTML = "文字列 = " +str+ "<br>";
ele.innerHTML += "結果 = " +data+ "<br>";
ele.innerHTML += "leftContextの内容 = " +RegExp.leftContext+ "<br>";//最後にマッチした文字列の左側を表示する
ele.innerHTML += "rightContextの内容 = " +RegExp.rightContext+ "<br>";//最後にマッチした文字列の右側を表示する