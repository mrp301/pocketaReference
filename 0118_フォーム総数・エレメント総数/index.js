function check1(fObj){
  var txt = "入力文字数 : " +fObj.value.length +"\n";
  txt += "エレメント総数 : " +document.forms[2].elements.length + "\n";
  txt += "フォーム総数 : " +document.forms.length
  alert(txt);
}
