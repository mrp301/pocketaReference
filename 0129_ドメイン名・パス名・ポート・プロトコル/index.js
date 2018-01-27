var txt = "domain = " +location.domain + "<br>";
txt += "pathname = " +location.pathname + "<br>";
txt += "port = " +location.port + "<br>";
txt += "protocol = " +location.protocol;

document.getElementById("result").innerHTML = txt;
