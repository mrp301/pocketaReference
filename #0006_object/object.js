//#0005_オブジェクト

function myOBJ(n){
  this.number = n*2; //numberプロパティ：受け取った引数を２倍にする。
  this.add = function(param){return param + 2;} //addプロパティ：受け取ったパラメーターに+2加算する。
}

var newObj = new myOBJ(10); //変数newObjに新しく生成されたMyObjオブジェクトを入れる

//document.writeのdocument部分を省略可能にしている
with(document){
  write("newObj.number="+ newObj.number +"<br>"); //numberプロパティを呼び出す
  write("newObj.add(5) = "+ newObj.add(6)); //addプロパティを呼び出す
}