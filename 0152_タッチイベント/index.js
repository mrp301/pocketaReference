function disp(evt){
  var ele = document.getElementById("result");
  ele.innerHTML = "種類 = " +evt.type;
  ele.innerHTML += "<br>同時タッチ数 = " + evt.touches.length;
  ele.innerHTML += "<br>最初の指のタッチX座標= " + evt.touches[0].pageX;
}
window.document.addEventListener("touchstart", disp, false);
window.document.addEventListener("touchend", disp, false);
window.document.addEventListener("touchmove", disp, false);
