//#0022_プロトタイプオブジェクトを取得

var mainObj = { type1:"Melody", type2:"Rythm" };
var subObj = Object.create(mainObj); //mainObjを継承
var main = Object.getPrototypeOf(mainObj); //mainObjのプロトタイプオブジェクトが格納されている
displayObjectProp(mainObj);
var sub = Object.getPrototypeOf(subObj);
displayObjectProp(sub);

//オブジェクトの内容を出力
function displayObjectProp(o){
  var ele = document.getElementById("result");
  for(var i in o){
    ele.innerHTML += i +"="+ o[i] +"<br>";
  }
  ele.innerHTML += "<hr>";
}
