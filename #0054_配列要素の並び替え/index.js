//#0054

var ele = document.getElementById("result");
var theData = new Array("2011","Presented","By","KaZu","hiro","FuRu","hata");
ele.innerHTML = "要素順序逆転 : " +theData.reverse();
ele.innerHTML += "<br>要素並び替え : " +theData.sort(); //戻り値が整数なら昇順、負なら降順。省略時は文字コード順に並び替える。