//#0010_例外処理

try{
  WINDOWS("VISRA?");
}catch(e){ //eにはエラー内容が格納される。
  alert("エラーは" +e+ "です");
}finally{
  alert("ミスですね。どうしましょう");
}