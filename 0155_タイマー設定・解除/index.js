function startTimer(){
  timerID = setInterval("iTimer()",1000);
}

function stopTimer(){
  clearInterval(timerID);//タイマー停止
}

//タイマースタート
setTimeout(function(){
  var sec = (new Date()).getSeconds();
  document.getElementById("time1").innerHTML = sec;
  var msec = (new Date()).getMilliseconds();
  document.getElementById("time2").innerHTML = sec+ "." +msec;
  setTimeout(arguments.callee,10);
},10);
