window.addEventListener("devicemotion", function(evt){
  var ele = document.getElementById("result");
  var a = evt.rotationRate.alpha;
  var b = evt.rotationRate.beta;
  var g = evt.rotationRate.gamma;
  ele.innerHTML = "alpha:" +a+ "<br>beta:" +b+ "<br>gamma:" +g;
},true);
