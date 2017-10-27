//#0035

function setEval(){
  var str = document.myFORM.myValue.value;
  document.getElementById("result").innerHTML = eval(str); //数式から計算結果の数値に変換
}

function setToString(n){
  var str = eval(document.myFORM.myValue.value);
  document.getElementById("result").innerHTML = str.toString(n); //n進数に変換
}
