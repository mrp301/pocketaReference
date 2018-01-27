function check(fObj,fResult){
  for (var i=0, txt=""; i<fObj.options.length; i++) {
    txt += "index : " +fObj.options[i].index +  "\n";
    txt += "selected : " +fObj.options[i].selected + "\n";
  }
  txt += "selectedIndex : " +fObj.options.selectedIndex;
  fResult.value=txt;
}
