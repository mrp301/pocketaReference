//#0037

window.onload = function(event){
  var data = {
    mz : 700,
    pc : 6001,
    text : "RetoroPC",
    date : new Date()
  }
  var jsondata = JSON.stringify(data);
  document.getElementById("result").innerHTML = jsondata;
  //JSONからjsオブジェクトへ
  var obj = JSON.parse(jsondata);
  var a = obj.mz;
  var t = obj.text;
  var d = obj.date;
  document.getElementById("result2").innerHTML = a +"<br>"+ t +"<br>"+ d;
}