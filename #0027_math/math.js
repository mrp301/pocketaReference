//#0027_三角関数オブジェクト

Math.sign = function(n){
  if(n == 0) return 0;
  if(n < 0) return -1;
  return 1;
}
document.getElementById("result").innerHTML = Math.sign(700);