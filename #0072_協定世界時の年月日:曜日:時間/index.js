//#0071

var ele = document.getElementById("result");
var youbi = new Array("月","火","水","木","金","土","日");
var myDate = new Date();
var theDate = myDate.getUTCDate();
var theDay = youbi[myDate.getUTCDay()];
var theFyear = myDate.getUTCFullYear();
var theMonth = myDate.getUTCMonth() + 1;
ele.innerHTML = "西暦" +theFyear+ "(" +theYear+ ")年" +theMonth+ "月" +theDate+ "日" +theDay+ "曜日";