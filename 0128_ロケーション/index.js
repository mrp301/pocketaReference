var txt = "URL = " +document.URL + "<br>";
for (var i in location ) {
  try{ txt += i+ " = " +location[i] +"<br>"
  } catch(e) {}
}
document.getElementById("result").innerHTML = txt;
