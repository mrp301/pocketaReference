function check(fObj){
  var txt = "チェックボックス : " +fObj.CB.defaultChecked+ "\n";
  txt += "ラジオボタン : " +fObj.RD.defaultChecked+ "\n";
  txt += "ポップアップ項目 : " +fObj.SEL.options[0].defaultSelected+ "\n";
  txt += "テキストエリア : " +fObj.TE.defaultValue+ "\n";
  alert(txt);
}
