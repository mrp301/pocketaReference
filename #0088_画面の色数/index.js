//#0088

var txt = "画面の色深度 = " +screen.colorDepth+ "bits<br>";
txt += "オフスクリーンの色深度 = " +screen.pixelDepth+ "bits(Firefox/webkit)<br>";
txt += "オフスクリーンの色深度 = " +screen.bufferDepth+ "bits(IE)<br>";
document.getElementById("result").innerHTML = txt;
