//#0077a

var ele = document.getElementById("result");
var youbi = new Array("日","月","火","水","木","金","土");
myDate = new Date();
myDate.setUTCFullYear(2013);
myDate.setUTCMonth(1);
myDate.setUTCDate(3);
var theDate = myDate.getUTCDate();
var theDay = youbi[myDate.getUTCDay()];
var theFyear = myDate.getUTCFullYear();
var theMonth = myDate.getUTCMonth() + 1;
ele.innerHTML = "西暦" +theFyear+ "年" +theMonth+ "月" +theDate+ "日" +theDay+ "曜日";