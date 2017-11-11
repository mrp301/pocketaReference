//#0058

var ele = document.getElementById("result");
ele.innerHTML = "ABC".charCodeAt(0)+ "<br>"; //文字列ABCの0番目の文字AをISO Latin-1コードで表示する。
ele.innerHTML += String.fromCharCode(0x3042, 0x3044);