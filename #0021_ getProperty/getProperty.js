//#0021_プロパティの属性値を取得

var obj = { cure:"Melody" };
Object.defineProperty(obj,"pretty", {
  value : "Rythm",
  writable : false
});
var list = Object.getOwnPropertyDescriptor(obj,"cure");
displayObjectProp(list);
var list = Object.getOwnPropertyDescriptor(obj,"pretty");
displayObjectProp(list);

//オブジェクトの内容を出力
function displayObjectProp(o){
  var ele = document.getElementById("result");
  ele.innerHTML += "value = " +o.value+ "<br>";
  ele.innerHTML += "writable = " +o.writable+ "<br>";
  ele.innerHTML += "configurable = " +o.configurable+ "<br>";
  ele.innerHTML += "enumerable = " +o.enumerable+ "<br>";
  ele.innerHTML += "get = " +o.get+ "<br>";
  ele.innerHTML += "set = " +o.set+ "<hr>";
}
