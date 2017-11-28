//#0096

var txt = "";
for(var i in document){
  txt += i+ "=" +document[i] +"<br>";
}
document.getElementById("result").innerHTML = txt;