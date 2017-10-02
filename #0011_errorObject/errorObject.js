//#0011_エラーオブジェクト

var err1 = new Error("通常のエラー");
var err2 = new EvalError("evalエラー");
var err3 = new RangeError("範囲エラー");
var err4 = new ReferenceError("参照エラー");
var err5 = new SyntaxError("文法エラー");
var err6 = new TypeError("タイプエラー");
var err7 = new URIError("URIエラー");

function miss(errType){
  try{
    throw errType;
  }catch(e){
    var ele = document.getElementById("result");
    ele.innerHTML = "エラーメッセージ=" +e.message;
    ele.innerHTML += "<br>エラー行=" +e.lineNumber;
    ele.innerHTML += "<br>エラーファイル名=" +e.fileName;
  }
}
