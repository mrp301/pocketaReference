//#0012_エラー情報

var err = new Error("zero");
try{
  throw err;
}catch(e){
  var ele = document.getElementById("result");
  ele.innerHTML = "エラーメッセージ=" +e.message;
  ele.innerHTML += "<br>エラー行=" +e.lineNumber;
  ele.innerHTML += "<br>エラーファイル名=" +e.fileName;
}
