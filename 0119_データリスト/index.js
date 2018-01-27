function check(){
  var ele = document.getElementById("pc");
  var n = ele.list.childElementCount;
  alert(n + "個あります。内容は以下の通り \n" +ele.list.innerHTML);
}
