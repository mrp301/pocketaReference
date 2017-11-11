//#0059
//部分一致した場合は文字列の先頭位置、不一致の場合は-1を返す。また、検索開始位置を指定することができる。
function search(){
  var ele = document.getElementById("result");
  var target = document.getElementById("targetString").value;
  var text = document.getElementById("searchString").value;
  ele.innerHTML = "indexOf = " +target.indexOf(text,0)+ "<br>";//検索開始位置を0番目からに指定している
  ele.innerHTML += "lastIndexOf = " +target.lastIndexOf(text);
}