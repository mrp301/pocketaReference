function addEvent(){
  var imgObj = document.getElementById("photo");
  if (document.uniqueID) {
    imgObj.attachEvent("onclick",dispMsg);
  } else {
    imgObj.addEventListener("click",dispMsg,false);
  }
}

function dispMsg(){
  alert("画像がクリックされました");
}

function rmEvent(){
  var imgObj = document.getElementById("photo");
  if (document.uniqueID) {
    imgObj.detaEvent("onclick",dispMsg);
  } else {
    imgObj.removeEventListener("click", dispMsg, false);
  }
}
