//#0074

var ele = document.getElementById("result");
var myDate = new Date();
ele.innerHTML = "getTime = " +myDate.getTime() +"<br>";
ele.innerHTML += "getTimezoneOffset = " +myDate.getTimezoneOffset() +"<br>";
ele.innerHTML += "parse = " +Date.parse('2000/2/29') +"<br>"; //1970.1.1から2000.2.29までのミリ秒を返す
ele.innerHTML += "now = " +Date.now();
