document.getElementById("saveData").addEventListener("click",function(){
  var text = document.getElementById("myText").value;
  localStorage.setItem("myData", text);
},true);
window.addEventListener("storage", function(evt){
  alert("Storageイベント発生");
  var key = evt.oldValue;//変更前の値
  var newVal = evt.newValue;//変更後の値
  var url = evt.url//イベント発生元のURL
  var sa = evt.storageArea;
  document.getElementById("result").innerHTML = key +"<br>"+ oldVal +"<br>" +newVal +"<br>" +url+ "<br>" +sa;
},false);
