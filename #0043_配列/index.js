//#0043

var dList = new Array("日","月","火","水","木","金","土");
var mName = ["陸月","如月","弥生","卯月","？月","水無月","文月","葉月","長月","神無月","霜月","師走"];
var dtObj = new Date();
document.getElementById("result").innerHTML = "今日は" +mName[dtObj.getMonth()]+ "、" +dList[dtObj.getDay()]+ "曜日です";