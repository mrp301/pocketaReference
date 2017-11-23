//#0086

document.getElementById("nextButton").onClick = function(){
  var t = (new Date()).getTime();
  var newURL = "http://" +location.host + location.pathname+ "?time=" +t;
  history.pushState("mz","",newURL);
  var txt = "ヒストリー数は現在" +history.length + "あります。";
  document.getElementById("result").innerHTML = txt;
}