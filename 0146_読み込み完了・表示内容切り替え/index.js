window.onload = function(){
  alert("Loadイベント発生とき");
};

window.onload = function(){
  alert("Unloadイベント発生");
};

window.onbeforeunload = function(){
  alert("BeforeUnloadイベント発生");
};

if(window.addEventListener){
  window.addEventListener("DOMContentLoaded",function(){
    alert("DOMContentLoadedイベント発生");
  },false);
}
