//#0073　

var ele = document.getElementById("result");
var myDate = new Date();
var h = myDate.getUTCHours();
var m = myDate.getUTCMinutes();
var s = myDate.getUTCSeconds();
var msec = myDate.getUTCMilliseconds();
ele.innerHTML = h+ "時" +m+ "分" +s+ "." +msec+ "秒";
