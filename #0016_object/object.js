//#0016_オブジェクト

var obj1 = new Object("water"); //オブジェクトの生成
var obj2 = {name : "fall"}; //オブジェクトとnameプロパティを同時に設定している。（[name]プロパティに[fall]という値をセットしている）
document.getElementById("result").innerHTML = obj1 +"<hr>"+ obj2.name;
