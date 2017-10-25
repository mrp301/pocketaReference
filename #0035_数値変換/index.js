//#0035

function setEval(){
  var str = document.myFORM.myValue.value;
  document.getELementById("result").innerHTML = eval(str);
}

function setToString(n){
  var str = eval(document.myFORM.myValue.value);
  document.getELementById("result").innerHTML = toString(n);
}
