function check(evt){
  document.myForm.keyStatus.value += evt.type + "\n";
}
document.body.onkeyup = check;
document.body.onkeydown = check;
document.body.onkeypress = check;
document.body.onhelp = check;
