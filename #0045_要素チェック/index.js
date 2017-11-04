//#0045

function check(value,index,array){
  if(value.indexOf("mz") > -1)return true; else return false;
}

var flag1 = ["mz-80B","mz-2000","mz-2500"].every(check); //戻り値が全てtrueの場合trueを返す
var flag2 = ["mz-80B","PC-6001","mz-2500"].every(check);
var flag3 = ["mz-80B","mz-2000","mz-2500"].some(check);
var flag4 = ["mz-80B","PC-6001","mz-2500"].some(check);
var ele = document.getElementById("result");
ele.innerHTML = "■everyの結果<br>" +flag1+ "<br>" +flag2+ "<br>";
ele.innerHTML += "■someの結果<br>" +flag3+ "<br>" +flag4+ "<br>";