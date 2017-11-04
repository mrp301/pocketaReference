//#0046

var ele = document.getElementById("result");
var data = [-3,-1,-4,1,5,9,2,6,53,589,7932];
var d = data.filter(function(value,index,array){
  if(value > 0){ return value; } //0未満の値は除外
});
ele.innerHTML = "正数リスト =" +d; //フィルターで負の値を除外した数値が出力される