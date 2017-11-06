//#0047

var data = [-3 ,-1 ,-4 ,1 ,5 ,9 ,2 ,6 ,53 ,589 ,7932];
data.forEach(function(value, index, array){
  var ele = document.getElementById("result");
  ele.innerHTML += "No." +index+ "=" +value+ "<br>";
});
