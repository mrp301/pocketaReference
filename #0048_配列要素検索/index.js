//#0048

var ele = document.getElementById("result");
var fe = ["2011", "By", "kazuhiro", "Furuhata", "By", "KF"];
ele.innerHTML = "indexOf('By') =" +fe.indexOf("By");
ele.innerHTML += "<br>indexOf('Bye')=" +fe.indexOf("Bye");
ele.innerHTML += "<br>lastIndexOf('By',4)=" +fe.lastIndexOf("By",4); //開始位置を4番目の要素から行う
ele.innerHTML += "<br>lastIndexOf('Bye')=" +fe.lastIndexOf("Bye"); //開始位置を4番目の要素から行う。
