//#0082
var txt = ""
for(var i in navigator){
  try{txt += i+ " = " +navigator[i]+ "<br>";
}catch(e){}
}
document.getElementById("result").innerHTML = txt;

