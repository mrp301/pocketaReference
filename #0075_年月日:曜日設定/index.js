//#0075

var ele = document.getElementById("result");
var youbi = new Array("日","月","火","水","木","金","土");
myDate = new Date();
myDate.setFullYear(2013);
myDate.setMonth(1);
myDate.setDate(3);
var theDate = myDate.getDate();
var theDay = youbi[myDate.getDay()];
var theYear = myDate.getYear();
var theFyear = myDate.getFullYear();
var theMonth = myDate.getMonth() + 1;
ele.innerHTML = "西暦" +theFyear+ "(" +theYear+ ")年" +theMonth+ "月" +theDate+ "日" +theDay+ "曜日";
