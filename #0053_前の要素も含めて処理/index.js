//#0053

function connection(prev,value,index,array){
  return prev + value;
}
var data = ["A","B","C","D","E"];
var d1 = data.reduce(connection);//前方から処理
var d2 = data.reduceRight(connection,"■"); //後方から処理
document.getElementById("result").innerHTML = d1 +"<br>"+ d2;