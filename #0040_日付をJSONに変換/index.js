//#0040

var dateObj = (new Date()).toJSON();
document.getElementById("result").innerHTML = dateObj + "<br>";
var dateObj2 = new Date(dateObj);
document.getElementById("result").innerHTML += dateObj2.toString();