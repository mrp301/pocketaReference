//#0099

function create(){
  var Obj = document.createElement("img");
  Obj.src = "title.jpg";
  var result = document.getElementById("result");
  document.body.insertBefore(Obj, result);
}