function check(){
  for (var i=0,txt=""; i<3; i++) {
    txt += document.myForm.mySelect.options[i].text + "\n";
  }
  alert(txt);
}
