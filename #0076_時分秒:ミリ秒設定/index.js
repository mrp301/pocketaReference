//#0076

var ele = document.getElementById("result");
var youbi = new Array("日","月","火","水","木","金","土");
myDate = new Date();
myDate.setHours(12);
myDate.setMinutes(34);
myDate.setSeconds(56);
myDate.setMilliseconds(999);
var h = myDate.getHours();
var m = myDate.getMinutes();
var s = myDate.getSeconds();
var msec = myDate.getMilliseconds();
ele.innerHTML = h+ "時" +m+ "分" +m+ "." +msec+ "秒";