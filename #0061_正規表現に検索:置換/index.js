//#0061

function Xmatch(){
  var text = document.getElementById("targetText").value;
  document.getElementById("result").innerHTML = "検索結果 : " +text.match(/ABC/i);//大文字、小文字無視して検索する。不一致ならnullを返す
}

function Xreplace(){
  var text = document.getElementById("targetText").value;
  var srchText = document.getElementById("replaceText").value;
  document.getElementById("result").innerHTML = "置換結果 : " +text.replace(/ABC/i,srchText); //ABCを大文字小文字無視して検索、一致したらsrchTextに変換する
}