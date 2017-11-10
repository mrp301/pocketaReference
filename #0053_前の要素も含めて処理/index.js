//#0053

function connection(prev,value,index,array){ //前の要素、要素、位置、配列　がパラメータとして渡される。
  return prev + value;
}
var data = [1,2,3,4,5];
data.forEach(function(value,index,array){ //要素、位置、配列
  var e = document.getElementById("result").innerHTML += index+ "番目：" +value+ "<br>"; 
})
var d1 = data.reduce(connection);//前方から処理
var d2 = data.reduceRight(connection,"■"); //後方から処理
document.getElementById("result").innerHTML += d1 +"<br>"+ d2;