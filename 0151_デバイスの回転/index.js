window.addEventListener("orientationchange", function(evt){
  var rotate = window.orientation;
  document.getElementById("result").innerHTML = "回転角度 : " +rotate;
},true);
