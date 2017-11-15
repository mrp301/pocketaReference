//#0071

ele = document.getElementById("result");
myDate = new Date();
h = myDate.getHours();
m = myDate.getMinutes();
s = myDate.getSeconds();
var msec = myDate.getMilliseconds();
ele.innerHTML = h+ "時" +m+ "分" +s+ "." +msec+ "秒";

function time(){
  myDate = new Date();
  h = myDate.getHours();
  m = myDate.getMinutes();
  s = myDate.getSeconds();
  msec = myDate.getMilliseconds();
  ele.innerHTML = h+ "時" +m+ "分" +s+ "." +msec+ "秒";
}

setInterval("time()",100);