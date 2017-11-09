//#0051

var ele = document.getElementById("result");
var data = [-3,-1,-4,1,5,9,2,6,53,589,7932];
var d = data.map(function(value,index,array){
  return Math.abs(value); //Math.abs 絶対値を返す。一括で全て加工できる
});
ele.innerHTML = "data = " +data+ "<br>d = " +d;