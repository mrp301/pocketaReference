//#0017_作成元

var obj1 = new Date();
var obj2 = new Array();
var txt = "obj1 = " +obj1.constructor+ "<br>"; //obj1の作成元を調べる
txt += "obj2 = " +obj2.constructor+ "<br>"; //obj2の作成元を調べる
txt += "obj2(instanceof Date?) = "+ obj2 instanceof Date; //obj2がDateオブジェクトかどうか調べる
document.getElementById("result").innerHTML = txt; //obj2は配列オブジェクトなのでfalseが帰ってくる。
