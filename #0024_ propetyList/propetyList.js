//#0024_プロパティリスト

var ele = document.getElementById("result");
var tauburn = ["star","driver"];

//プロパティは配列として格納される
ele.innerHTML = Object.keys(tauburn) +"<hr>";
ele.innerHTML += Object.getOwnPropertyNames(tauburn);
