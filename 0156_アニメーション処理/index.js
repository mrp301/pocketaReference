var raf = window.requestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(){};
function startAnime1(){ displayTime(1); raf(startAnime1); }
function startAnime2(){ displayTime(2); raf(startAnime2); }
function startAnime3(){ displayTime(3); raf(startAnime3); }
function displayTime(n){
  var sec = (new Date()).getSeconds();
  var msec = (new Date()).getMilliseconds();
  document.getElementById("time" +n).innerHTML = sec +"."+ msec;
}
