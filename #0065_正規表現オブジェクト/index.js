//#0065

var txt = "";
for(var i in RegExp){
  try{ txt += i+ " = " +RegExp[i]+ "<br>";
  }catch(e){}
}
document.getElementById("result").innerHTML = txt;

var hoge = "ABCD";
var check = new RegExp("bcd","i"); //正規表現オブジェクトを作成している。（大文字、小文字区別なくチェックする）
if (hoge.match(check)) {
  document.getElementById("result").innerHTML += "BCDを含んでいます。";
}