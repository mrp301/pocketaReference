var txt = "";
for (var i in document.anchors) {
  try { txt += i+ "=" +document.anchors[i] + "<br>";
  } catch(e) {}
}
txt += "<hr>hash = " + document.links[0].hash;
document.getElementById("result").innerHTML = txt;
