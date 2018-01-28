window.addEventListener("devicemotion", function(evt){
  var ele = document.getElementById("result");
  var x = evt.acceleration.x;
  var y = evt.acceleration.y;
  var z = evt.acceleration.z;
  var gx = evt.accelerationIncludingGravity.x;
  var gy = evt.accelerationIncludingGravity.y;
  var gz = evt.accelerationIncludingGravity.z;
  ele.innerHTML = "X :" +x+ "<br>Gravity Y:" +y+ "<br>Gtavity z:" +z+ "<br>";
}, true);
