//#0067

var ele = document.getElementById("result");
var myRE = new RegExp("(MZ....)","g");
var str = "MZ-700MZ1500MZ2500MZ3500";
var data = str.match(myRE);
ele.innerHTML = "結果 = " +data+ "<br>";
ele.innerHTML += "LastMatchの内容 = " +RegExp.lastMatch+ "<br>";
ele.innerHTML += "LastParenの内容 = " +RegExp.lastParen+ "<br>";