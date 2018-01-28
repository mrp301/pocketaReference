document.getElementById("loadData").addEventListener("click", function(){
  var text = localStorage.getItem("myData");_
  var dt = localStorage.getItem("saveDate");
  document.getElementById("myText").value = text + "\n" + dt;
}, true);
document.getElementById("clearAll").addEventListener("click", function(){
  localStorage.removeItem("saveDate");
},true);
