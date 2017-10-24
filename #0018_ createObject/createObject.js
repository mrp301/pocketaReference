//#0018_オブジェクトを生成

var mainObj = { //mainObjオブジェクトのtype1、type2プロパティを生成
  type1 : "Melody",
  type2 : "Rythm"
};
var subObj = Object.create(mainObj); //mainObjの内容を複製しつつ、新しくにcreateプロパティを生成している
displayObjectProp(subObj);
subObj.type2 = "muse";
displayObjectProp(subObj);
// delete subObj.type2; subObjのtyop2プロパティ（Rythm）を削除すると、継承元のmainObjのtype2プロパティの値が表示される（Melody）
// displayObjectProp(subObj); 

//オブジェクトの内容を出力
function displayObjectProp(o){
  var ele = document.getElementById("result");
  // for(var i in o){
  //   ele.innerHTML += i +"="+ o[i] +"<br>";
  //   ele.innerHTML += "<hr>"
  // }
  ele.innerHTML = "subObjオブジェクトのtype2プロパティ：" +subObj.type2+ "<br>mainObjオブジェクトのtype2プロパティ：" +mainObj.type2;
}
