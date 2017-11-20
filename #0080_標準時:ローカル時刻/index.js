//#0080

var ele = document.getElementById("result");
var myDate = new Date();
var txt = "toGMTString = " +myDate.toGMTString()+ "<br>";
txt += "toLocaleString =" +myDate.toLocaleString()+ "<br>";
txt += "toUTCString =" +myDate.toUTCString()+ "<br>";
ele.innerHTML = txt;

