//#0006_変数/オブジェクト削除

newObj = new Array("Java","Script");
document.write("newObj[0] = " +newObj[0]+ "<br>");
delete newObj;
try{
  document.write("newObj[0] = " +newObj[0]+ "<br>");
}catch(e){
  document.write("newObjはありません。");
}

