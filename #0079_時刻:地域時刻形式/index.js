//#0079

var ele = document.getElementById("result");
dtObj = new Date();
var dtStr = dtObj.toString();
var txt = "dtObj = " +dtObj+ "<br>";
txt += "toDateString = " +dtObj.toDateString()+ "<br>";
txt += "toTimeString = " +dtObj.toTimeString()+ "<br>";
txt += "toLocaleDateString = " +dtObj.toLocaleDateString()+ "<br>";
txt += "toLocaleLowerCase = " +dtStr.toLocaleLowerCase()+ "<br>";
txt += "toLocaleUpperCase = " +dtStr.toLocaleUpperCase()+ "<br>";
ele.innerHTML = txt;