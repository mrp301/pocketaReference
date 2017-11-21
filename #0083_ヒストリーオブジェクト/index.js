//#0083
var txt = ""
for(var i in history){
  try{txt += i+ " = " +history[i]+ "<br>";
}catch(e){}
}
document.getElementById("result").innerHTML = txt;
// history.back(); ←一つ前に戻る

