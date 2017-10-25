//#0033

function calc(){
  var n = document.getElementById("num").value;
  n = parseFloat(n);
  var txt = "2の"+ n +"乗=" + Math.pow(2,n) + "<br>";
  document.getElementById("result").innerHTML = txt;
}
