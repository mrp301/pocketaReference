//#0070

var ele = document.getElementById("result");
var youbi = new Array("月","火","水","木","金","土","日");
var myDate = new Date();
var theDate = myDate.getDate();
var theDay = youbi[myDate.getDay()];
var theFyear = myDate.getFullYear();
var theYear = myDate.getYear();
var theMonth = myDate.getMonth() + 1;
ele.innerHTML = "西暦" +theFyear+ "(" +theYear+ ")年" +theMonth+ "月" +theDate+ "日" +theDay+ "曜日";