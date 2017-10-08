//#0019_プロパティの属性値を設定

var obj = {cure : "Melody"};
displayObjectProp(obj); //この段階ではprettyプロパティは作成されていないのでundefindになる
Object.defineProperty(obj, "pretty",{
  value : "Rythm",
  writable : false //書き込み不可
});
displayObjectProp(obj); //prettyプロパティにRythmを書き込み不可に設定して追加
obj.char = "muse";
obj.pretty = "white"; //prettyは書き込み不可に設定しているので、whiteを代入しても無視される
displayObjectProp(obj);
//内容を出力
function displayObjectProp(o){
  var ele = document.getElementById("result");
  for(var i in o){
    ele.innerHTML += i +"="+ o[i] +"<br>";
  }
  ele.innerHTML += "pretty = " +o.pretty+ "<hr>";
}
