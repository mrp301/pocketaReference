//#0078

var ele = document.getElementById("result");
var youbi = new Array("日","月","火","水","木","金","土");
myDate = new Date();
myDate.setUTCHours(12);
myDate.setUTCMinutes(34);
myDate.setUTCSeconds(56);
myDate.setUTCMilliseconds(999);
var h = myDate.getUTCHours();
var m = myDate.getUTCMinutes();
var s = myDate.getUTCSeconds();
var msec = myDate.getUTCMilliseconds();
ele.innerHTML = h+ "時" +m+ "分" +m+ "." +msec+ "秒";