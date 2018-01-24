function check(){
  alert("Action : " +document.forms[0].action);
}

function setAdrs(){
  var newURL = document.forms[0].elements[0].value;
  document.forms[0].action = newURL;
}
